export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-2xl p-4 md:p-6 shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}