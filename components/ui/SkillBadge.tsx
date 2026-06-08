import { cn } from "@/lib/utils";

type Proficiency = "Expert" | "Proficient" | "Learning";

interface SkillBadgeProps {
  name: string;
  proficiency?: Proficiency;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

const proficiencyConfig: Record<Proficiency, { dot: string; label: string }> = {
  Expert:     { dot: "bg-green-500", label: "Expert" },
  Proficient: { dot: "bg-blue-500",  label: "Proficient" },
  Learning:   { dot: "bg-amber-400", label: "Learning" },
};

export default function SkillBadge({
  name,
  proficiency,
  variant = "default",
  className,
}: SkillBadgeProps) {
  if (variant === "compact") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl",
          "bg-[#fffcf8] border border-[#ececec] text-[#111111]",
          "text-xs font-bold hover:border-[#ff6b00]/40 hover:text-[#ff6b00]",
          "transition-all duration-200 cursor-default shadow-sm",
          className
        )}
      >
        {name}
      </span>
    );
  }

  if (variant === "featured") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-xl",
          "bg-[#fff4ea] border border-[#ff6b00]/20 text-[#ff6b00]",
          "text-xs font-bold uppercase tracking-wider shadow-sm",
          className
        )}
      >
        {name}
      </span>
    );
  }

  // default variant — with optional proficiency dot
  return (
    <div
      className={cn(
        "group flex items-center justify-between gap-3 px-4 py-3 rounded-2xl",
        "bg-[#fffcf8] border border-[#ececec]",
        "hover:border-[#ff6b00]/30 hover:bg-white hover:-translate-y-0.5",
        "transition-all duration-200 cursor-default shadow-sm",
        className
      )}
    >
      <span className="text-sm font-bold text-[#111111] group-hover:text-[#ff6b00] transition-colors">
        {name}
      </span>
      {proficiency && (
        <div className="flex items-center gap-1.5 shrink-0">
          <div
            className={cn(
              "w-2 h-2 rounded-full",
              proficiencyConfig[proficiency].dot
            )}
          />
          <span className="text-[10px] font-bold text-[#999] uppercase tracking-wide hidden sm:block">
            {proficiencyConfig[proficiency].label}
          </span>
        </div>
      )}
    </div>
  );
}
