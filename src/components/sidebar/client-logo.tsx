import { generateInitials } from "@/utils/client-utils";

interface ClientLogoProps {
  name?: string;
  code?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Client logo component that displays initials in a styled container
 */
export function ClientLogo({
  name,
  code,
  size = "md",
  className = "",
}: ClientLogoProps) {
  const initials = generateInitials(name, code);

  // Size classes
  const sizeClasses = {
    sm: "size-8 text-xs",
    md: "size-10 text-sm",
    lg: "size-12 text-base",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground ${sizeClasses[size]} ${className}`}>
      <span className="font-bold">{initials}</span>
    </div>
  );
}
