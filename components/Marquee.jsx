"use client";
import { stack } from "@/data/portfolio";
import { getIcon } from "./icons";

export default function Marquee() {
  const items = [...stack, ...stack]; // duplicate for seamless loop
  return (
    <div className="py-6 border-y border-line overflow-hidden bg-surface/40">
      <div className="flex gap-3 w-max animate-marquee">
        {items.map((tech, i) => {
          const Icon = getIcon(tech.icon);
          return (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-line bg-surface text-sm text-muted whitespace-nowrap"
            >
              <Icon className="text-accent" size={16} />
              {tech.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
