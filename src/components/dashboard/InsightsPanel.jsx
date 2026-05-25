import Card from "../ui/Card";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Enterprise Sales",
    deals: 42,
    revenue: "$84,000",
  },

  {
    name: "Michael Brown",
    role: "Account Executive",
    deals: 36,
    revenue: "$68,400",
  },

  {
    name: "Emma Wilson",
    role: "Growth Specialist",
    deals: 31,
    revenue: "$59,200",
  },

  {
    name: "Daniel Smith",
    role: "Business Development",
    deals: 27,
    revenue: "$48,900",
  },
];

export default function InsightsPanel() {
  const gradientAvatars = [
    "from-[#DA291C] to-red-950",
    "from-red-600 to-[#DA291C]",
    "from-red-500 to-red-700",
    "from-[#DA291C]/80 to-red-650",
  ];

  return (
    <Card className="border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-slate-900">
            Top Performing Team
          </h3>

          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">
            Sales leaderboard performance
          </p>
        </div>

        <span className="text-[10px] font-bold text-[#DA291C] bg-red-50 px-2.5 py-1 rounded-full border border-red-100/80">
          This Month
        </span>
      </div>

      <div className="space-y-3">
        {teamMembers.map((member, index) => {
          const initials = member.name.split(" ").map(n => n[0]).join("");
          const rank = index + 1;

          return (
            <div
              key={member.name}
              className="
                flex
                items-center
                justify-between
                p-3.5
                rounded-2xl
                border
                border-zinc-100
                bg-zinc-50/20
                hover:bg-zinc-50/60
                transition-all
                duration-250
              "
            >
              <div className="flex items-center gap-3">
                {/* Ranking Tag */}
                <span className={`w-5 text-xs font-black ${rank === 1 ? 'text-[#DA291C]' : 'text-zinc-400'}`}>
                  #{rank}
                </span>

                {/* Avatar with gradient */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${gradientAvatars[index % gradientAvatars.length]} flex items-center justify-center text-white font-bold text-xs shadow-xs`}>
                  {initials}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-black leading-none">
                    {member.name}
                  </h4>

                  <p className="text-[10px] text-zinc-400 mt-1 font-bold uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs font-black text-[#DA291C]">
                  {member.revenue}
                </p>

                <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-1">
                  {member.deals} deals
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}