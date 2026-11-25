export interface PreloadResult {
  loadedCount: number;
  failedCount: number;
  totalCount: number;
  timedOut: boolean;
}

export type ImageLoaderFn = (src: string) => Promise<boolean>;

export function deduplicateImageSources(sources: readonly string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const src of sources) {
    const trimmed = src.trim();
    if (trimmed && !seen.has(trimmed)) {
      seen.add(trimmed);
      result.push(trimmed);
    }
  }

  return result;
}

export function loadBrowserImage(src: string): Promise<boolean> {
  if (typeof window === 'undefined' || typeof Image === 'undefined') {
    return Promise.resolve(false);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    let settled = false;

    const finish = (success: boolean) => {
      if (settled) return;
      settled = true;
      resolve(success);
    };

    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode()
          .then(() => finish(true))
          .catch(() => finish(true));
      } else {
        finish(true);
      }
    };

    img.onerror = () => finish(false);
    img.src = src;

    if (img.complete && img.naturalWidth > 0) {
      if (typeof img.decode === 'function') {
        img.decode()
          .then(() => finish(true))
          .catch(() => finish(true));
      } else {
        finish(true);
      }
    }
  });
}

export async function preloadImages(
  sources: readonly string[],
  options: {
    timeoutMs?: number;
    loader?: ImageLoaderFn;
  } = {}
): Promise<PreloadResult> {
  const uniqueSources = deduplicateImageSources(sources);
  const totalCount = uniqueSources.length;

  if (totalCount === 0) {
    return { loadedCount: 0, failedCount: 0, totalCount: 0, timedOut: false };
  }

  const loader = options.loader ?? loadBrowserImage;
  const timeoutMs = options.timeoutMs ?? 1500;

  let loadedCount = 0;
  let failedCount = 0;
  let timedOut = false;

  const loadAll = Promise.all(
    uniqueSources.map(async (src) => {
      const ok = await loader(src);
      if (ok) {
        loadedCount += 1;
      } else {
        failedCount += 1;
      }
    })
  );

  if (timeoutMs <= 0) {
    await loadAll;
    return { loadedCount, failedCount, totalCount, timedOut };
  }

  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeoutPromise = new Promise<'timeout'>((resolve) => {
    timeoutId = setTimeout(() => {
      timedOut = true;
      resolve('timeout');
    }, timeoutMs);
  });

  await Promise.race([loadAll, timeoutPromise]);

  if (timeoutId !== undefined) {
    clearTimeout(timeoutId);
  }

  return { loadedCount, failedCount, totalCount, timedOut };
}
