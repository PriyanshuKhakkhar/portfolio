import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  highlight?: string; // The word inside title to color orange
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  // Split title around the highlighted word if provided
  const titleParts = highlight
    ? title.split(new RegExp(`(${highlight})`, "i"))
    : [title];

  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {tag && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff4ea] text-[#ff6b00] text-sm font-bold mb-5">
          {tag}
        </span>
      )}

      <h2
        className={cn(
          "text-4xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight",
          subtitle ? "mb-5" : "mb-0"
        )}
      >
        {titleParts.map((part, i) =>
          part.toLowerCase() === (highlight?.toLowerCase() ?? "") ? (
            <span key={i} className="text-[#ff6b00]">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-[#666666] text-lg font-medium leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
