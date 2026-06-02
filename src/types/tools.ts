import type { DrawingElementType } from './drawing';

export type DrawingTool = 'selection' | DrawingElementType;

export type ToolItem = {
  id: DrawingTool;
  label: string;
  shortcut?: string;
};