import type { ModalProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import styles from "./atoms.module.scss";

export function Modal({
  children,
  onClose,
  labelledBy,
  className,
}: ModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <section
        className={cn(styles.modal, className)}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        {children}
      </section>
    </div>
  );
}