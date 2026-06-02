import type { DividerProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import styles from "./atoms.module.scss";

export function Divider({ className }: DividerProps) {
  return <div className={cn(styles.divider, className)} aria-hidden="true" />;
}