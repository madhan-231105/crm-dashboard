export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-white
        border
        border-[#dddddd]
        rounded-2xl
        p-4
        shadow-[0_1px_4px_rgba(0,0,0,0.03)]
        overflow-hidden
        w-full
        min-w-0
        ${className}
      `}
    >
      {children}
    </div>
  );
}