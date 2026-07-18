"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SESSION_KEY = "uc-intro-seen";
const HOLD_MS = 1900;
const FADE_MS = 900;

export default function IntroLoader() {
  const [phase, setPhase] = useState<"idle" | "playing" | "leaving" | "done">(
    "idle"
  );

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("playing");
    const leaveTimer = setTimeout(() => setPhase("leaving"), HOLD_MS);
    const doneTimer = setTimeout(() => setPhase("done"), HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={cn(
        "fixed inset-0 z-[70] flex flex-col items-center justify-center gap-5 bg-ink transition-opacity ease-luxe",
        phase === "leaving" ? "opacity-0 duration-1000" : "opacity-100 duration-300"
      )}
    >
      <p
        className={cn(
          "font-display text-2xl tracking-[0.4em] text-bone transition-all duration-1000 ease-luxe md:text-3xl",
          phase === "playing" || phase === "leaving"
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        )}
      >
        UNLEAVENED
      </p>
      <p
        className={cn(
          "label-uc text-ash transition-all delay-300 duration-1000 ease-luxe",
          phase === "playing" || phase === "leaving"
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        )}
      >
        Remain Unaltered.
      </p>
    </div>
  );
}
