import type { ContainerProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import styles from "./atoms.module.scss";

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}