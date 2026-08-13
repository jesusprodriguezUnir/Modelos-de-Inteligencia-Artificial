export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="h-10 w-64 animate-pulse rounded-lg bg-elev2" />
      <div className="mt-4 h-16 w-full max-w-xl animate-pulse rounded-lg bg-elev2" />
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-72 animate-pulse rounded-2xl border border-line bg-elev" />
        ))}
      </div>
    </div>
  );
}
