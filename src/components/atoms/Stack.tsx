import type { StackProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import styles from "./atoms.module.scss";

export function Stack({
  children,
  direction = "column",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  className,
}: StackProps) {
  return (
    <div
      className={cn(
        styles.stack,
        styles[`stackDirection-${direction}`],
        styles[`stackGap-${gap}`],
        styles[`stackAlign-${align}`],
        styles[`stackJustify-${justify}`],

        wrap && styles.stackWrap,
        className
      )}
    >
      {children}
    </div>
  );
}