// src/store/ToolStore.ts
import { makeAutoObservable } from "mobx";

export type ToolType = "none" | "shape" | "fill";

export class ToolStore {
  tool: ToolType = "none";
  selectedColor = "#000000";
  selectedShape = "circle";

  constructor() {
    makeAutoObservable(this);
  }

  setTool = (tool: ToolType) => {
    this.tool = tool;
  };

  setColor = (color: string) => {
    this.selectedColor = color;
  };

  setShape = (shape: string) => {
    this.selectedShape = shape;
  };
}

export const toolStore = new ToolStore();
