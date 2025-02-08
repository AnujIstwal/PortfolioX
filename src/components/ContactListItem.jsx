export default function ContactListItem({ title, details, icon }) {
  return (
    <div className="flex items-center justify-center gap-x-4">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#181818] to-[#222222]">
        {icon}
      </div>

      {/* Details */}
      <div className="flex flex-col items-start justify-center gap-y-2">
        <p className="text-lg font-semibold text-zinc-300">{title}</p>
        <p className="text-sm text-zinc-400">{details}</p>
      </div>
    </div>
  );
}
