import type { BadgeProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import styles from "./atoms.module.scss";

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[`badge-${variant}`], className)}>
      {children}
    </span>
  );
}