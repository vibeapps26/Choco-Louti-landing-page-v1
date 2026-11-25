export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[#F3EBDD] animate-pulse flex flex-col">
      {/* Navbar skeleton */}
      <div className="h-20 border-b border-[#173D32]/10 px-8 flex items-center justify-between">
        <div className="w-36 h-8 bg-[#173D32]/15 rounded" />
        <div className="hidden lg:flex items-center gap-6">
          <div className="w-16 h-4 bg-[#173D32]/15 rounded" />
          <div className="w-20 h-4 bg-[#173D32]/15 rounded" />
          <div className="w-24 h-4 bg-[#173D32]/15 rounded" />
          <div className="w-16 h-4 bg-[#173D32]/15 rounded" />
        </div>
        <div className="w-32 h-10 bg-[#173D32]/15 rounded" />
      </div>

      {/* Hero skeleton */}
      <div className="flex-1 max-w-[1360px] mx-auto w-full px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="w-40 h-4 bg-[#173D32]/15 rounded" />
          <div className="w-full h-16 bg-[#173D32]/15 rounded" />
          <div className="w-3/4 h-16 bg-[#173D32]/15 rounded" />
          <div className="w-full h-24 bg-[#173D32]/15 rounded" />
          <div className="flex gap-4 pt-4">
            <div className="w-40 h-12 bg-[#173D32]/15 rounded" />
            <div className="w-40 h-12 bg-[#173D32]/15 rounded" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="w-full aspect-[4/3] bg-[#173D32]/15 rounded" />
        </div>
      </div>
    </div>
  );
}
