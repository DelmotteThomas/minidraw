import type { CodeBlockProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import styles from "./atoms.module.scss";

export function CodeBlock({ code, className }: CodeBlockProps) {
  return (
    <div className={cn(styles.codeBlock, className)}>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}