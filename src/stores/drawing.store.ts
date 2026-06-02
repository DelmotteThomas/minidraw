import { create } from 'zustand';
import type { DrawingElement } from '@/types/drawing';
import type { DrawingTool } from '@/types/tools';

type DrawingState = {
  selectedTool: DrawingTool;
  elements: DrawingElement[];

  setSelectedTool: (tool: DrawingTool) => void;
  addElement: (element: DrawingElement) => void;
  updateElement: (id: string, element: Partial<DrawingElement>) => void;
  clearElements: () => void;
};

export const useDrawingStore = create<DrawingState>((set) => ({
  selectedTool: 'selection',
  elements: [],

  setSelectedTool: (tool) => {
    set({ selectedTool: tool });
  },

  addElement: (element) => {
    set((state) => ({
      elements: [...state.elements, element],
    }));
  },

  updateElement: (id, element) => {
    set((state) => ({
      elements: state.elements.map((currentElement) =>
        currentElement.id === id
          ? { ...currentElement, ...element }
          : currentElement,
      ),
    }));
  },

  clearElements: () => {
    set({ elements: [] });
  },
}));