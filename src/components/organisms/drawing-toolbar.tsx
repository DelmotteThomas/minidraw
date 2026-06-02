'use client';

import { toolsData } from '@/data/tools-data';
import { ToolButton } from '@/components/molecules';
import { useDrawingStore } from '@/stores/drawing.store';

import styles from './organisms.module.scss';

export function DrawingToolbar() {
  const selectedTool = useDrawingStore((state) => state.selectedTool);
  const setSelectedTool = useDrawingStore((state) => state.setSelectedTool);
  const clearElements = useDrawingStore((state) => state.clearElements);

  return (
    <header className={styles.drawingToolbar}>
      <div className={styles.toolsList}>
        {toolsData.map((tool) => (
          <ToolButton
            key={tool.id}
            tool={tool}
            isActive={selectedTool === tool.id}
            onClick={() => setSelectedTool(tool.id)}
          />
        ))}
      </div>

      <button type="button" onClick={clearElements}>
        Clear
      </button>
    </header>
  );
}