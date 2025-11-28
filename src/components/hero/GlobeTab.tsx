"use client";

export function GlobeTab() {
  return (
    <div className="mb-10 flex justify-center">
      <div
        className="flex h-16 items-center justify-center rounded-b-[999px] bg-black px-12"
        style={{
          clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent">
          <GlobeIcon />
        </div>
      </div>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5 text-white"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      {/* Crosshair elements */}
      <circle cx="12" cy="12" r="3" strokeWidth="1" />
      <line x1="12" y1="2" x2="12" y2="5" strokeWidth="1.5" />
      <line x1="12" y1="19" x2="12" y2="22" strokeWidth="1.5" />
      <line x1="2" y1="12" x2="5" y2="12" strokeWidth="1.5" />
      <line x1="19" y1="12" x2="22" y2="12" strokeWidth="1.5" />
    </svg>
  );
}

