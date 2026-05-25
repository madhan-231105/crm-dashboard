export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}