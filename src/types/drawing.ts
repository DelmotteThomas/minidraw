export type DrawingElementType = 'rectangle' | 'line' | 'text';

export type DrawingElement = {
  id: string;
  type: DrawingElementType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  x2?: number;
  y2?: number;
  text?: string;
  strokeColor: string;
  backgroundColor: string;
};