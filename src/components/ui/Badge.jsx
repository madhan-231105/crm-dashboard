export default function Badge({ children }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
      {children}
    </span>
  );
}