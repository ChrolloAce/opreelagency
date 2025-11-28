"use client";

import { theme } from "@/lib/theme";

export function Subheadline() {
  return (
    <p
      className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 text-center leading-relaxed"
      style={{ fontFamily: theme.fonts.body }}
    >
      <span className="font-semibold text-slate-900">Volume negates luck.</span>{" "}
      We provide and manage UGC creators to effectively scale your brand fast.
    </p>
  );
}
