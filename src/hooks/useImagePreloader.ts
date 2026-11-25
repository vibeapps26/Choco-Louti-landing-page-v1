import { useEffect, useMemo, useState } from 'react';
import { deduplicateImageSources, preloadImages } from '../utils/imagePreloader';

interface UseImagePreloaderOptions {
  timeoutMs?: number;
  minimumDelayMs?: number;
}

interface UseImagePreloaderState {
  isReady: boolean;
  timedOut: boolean;
}

export function useImagePreloader(
  sources: readonly string[],
  options: UseImagePreloaderOptions = {}
): UseImagePreloaderState {
  const { timeoutMs = 1400, minimumDelayMs = 150 } = options;
  const sourcesKey = useMemo(() => deduplicateImageSources(sources).join('|'), [sources]);
  const [state, setState] = useState<UseImagePreloaderState>({
    isReady: false,
    timedOut: false,
  });

  useEffect(() => {
    let active = true;
    const uniqueSources = sourcesKey ? sourcesKey.split('|') : [];

    const delayPromise =
      minimumDelayMs > 0
        ? new Promise<void>((resolve) => setTimeout(resolve, minimumDelayMs))
        : Promise.resolve();

    Promise.all([
      preloadImages(uniqueSources, { timeoutMs }),
      delayPromise,
    ]).then(([result]) => {
      if (!active) return;
      setState({
        isReady: true,
        timedOut: result.timedOut,
      });
    });

    return () => {
      active = false;
    };
  }, [sourcesKey, timeoutMs, minimumDelayMs]);

  return state;
}
