import { AppButton } from '@/components/atoms';
import type { ToolItem } from '@/types/tools';

type ToolButtonProps = {
  tool: ToolItem;
  isActive: boolean;
  onClick: () => void;
};

export function ToolButton({ tool, isActive, onClick }: ToolButtonProps) {
  return (
    <AppButton isActive={isActive} onClick={onClick}>
      {tool.label}
      {tool.shortcut && ` (${tool.shortcut})`}
    </AppButton>
  );
}