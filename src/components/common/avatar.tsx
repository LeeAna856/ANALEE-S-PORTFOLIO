import { cn } from "@/lib/cn";

interface AvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-12 h-12 text-base",
  md: "w-20 h-20 text-2xl",
  lg: "w-32 h-32 text-4xl",
  xl: "w-44 h-44 text-6xl",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
}

// Displays the user's photo if `src` is provided; otherwise falls back to
// a clean gradient avatar with the person's initials.
export function Avatar({ name, src, size = "lg", className }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={cn(
          "rounded-full object-cover border-4 border-white shadow-lg shrink-0",
          sizeMap[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "rounded-full border-4 border-white shadow-lg shrink-0 flex items-center justify-center font-bold text-white bg-linear-to-br from-blue-600 to-indigo-600",
        sizeMap[size],
        className
      )}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
}
