import type { TextProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import styles from "./atoms.module.scss";

export function Text({
  children,
  as: Component = "p",
  size = "md",
  color = "default",
  weight = "regular",
  uppercase = false,
  className,
}: TextProps) {
  return (
    <Component
      className={cn(
        styles.text,
        styles[`textSize-${size}`],
        styles[`textColor-${color}`],
        styles[`textWeight-${weight}`],
        uppercase && styles.uppercase,
        className
      )}
    >
      {children}
    </Component>
  );
}