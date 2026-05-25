export default function Badge({ children }) {
  const status = children?.toString() || "";
  let badgeStyles = "bg-zinc-50 text-zinc-600 border-zinc-200/60";

  if (status === "Active") {
    badgeStyles = "bg-red-50 text-[#DA291C] border-red-100 shadow-xs";
  } else if (status === "Pending") {
    badgeStyles = "bg-zinc-100 text-zinc-950 border-zinc-200";
  } else if (status === "Negotiation") {
    badgeStyles = "bg-zinc-50 text-zinc-500 border-zinc-200";
  } else if (status === "Closed") {
    badgeStyles = "bg-white text-zinc-400 border-zinc-200";
  }

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeStyles} inline-block uppercase tracking-wider`}>
      {children}
    </span>
  );
}