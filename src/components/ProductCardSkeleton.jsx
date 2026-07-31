const ProductCardSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg">
      {/* Image Skeleton */}
      <div className="h-64 bg-zinc-800 animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        <div className="h-6 w-3/4 bg-zinc-800 rounded animate-pulse" />

        <div className="flex items-center justify-between">
          <div className="h-8 w-20 bg-zinc-800 rounded animate-pulse" />
          <div className="h-5 w-16 bg-zinc-800 rounded animate-pulse" />
        </div>

        <div className="h-11 w-full bg-zinc-800 rounded-xl animate-pulse" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;