const SkeletonCard = () => (
  <div className="card-sakura p-6 animate-pulse">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
);

const SkeletonProject = () => (
  <div className="card-sakura cursor-pointer group relative overflow-hidden animate-pulse">
    <div className="aspect-video bg-gray-200 dark:bg-gray-700"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
);

const SkeletonPassion = () => (
  <div className="card-sakura p-6 text-center animate-pulse">
    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 mx-auto mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
    </div>
  </div>
);

const SkeletonTimeline = () => (
  <div className="flex gap-6 items-start animate-pulse">
    <div className="flex-shrink-0 w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
    <div className="card-sakura p-6 flex-1">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
      </div>
    </div>
  </div>
);

export const HistorySkeleton = () => (
  <section className="py-16 bg-background">
    <div className="container-custom">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-8 animate-pulse"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mb-12 animate-pulse"></div>
      <div className="space-y-12">
        <SkeletonTimeline />
        <SkeletonTimeline />
        <SkeletonTimeline />
      </div>
    </div>
  </section>
);

export const ProjectsSkeleton = () => (
  <section className="py-16 bg-background">
    <div className="container-custom">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-8 animate-pulse"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mb-12 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
      </div>
    </div>
  </section>
);

export const FutureSkeleton = () => (
  <section className="py-16 bg-gradient-to-b from-pink-50/30 to-white">
    <div className="container-custom">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-8 animate-pulse"></div>
      <div className="card-sakura p-8 animate-pulse">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const PassionsSkeleton = () => (
  <section className="py-16 bg-gradient-to-b from-white to-pink-50/30">
    <div className="container-custom">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-8 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <SkeletonPassion />
        <SkeletonPassion />
        <SkeletonPassion />
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="py-16 bg-background">
    <div className="container-custom">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-8 animate-pulse"></div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-80 mb-8 animate-pulse"></div>
          <div className="flex gap-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

