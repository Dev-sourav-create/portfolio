export default function AvailabilityStatus() {
  return (
    <div
      className="flex items-center gap-2"
      style={{ opacity: 1, transform: "none" }}
    >
      {/* Blinking dot */}
      <div className="relative flex h-3 w-3">
        {/* Ping animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Solid center dot */}
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
      </div>

      {/* Text */}
      <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
        Available for work
      </span>
    </div>
  );
}
