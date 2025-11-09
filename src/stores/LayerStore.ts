// src/store/LayerStore.ts
import { makeAutoObservable } from "mobx";

export interface ShapeData {
  type: "circle" | "square" | "rectangle" | "triangle";
  x: number;
  y: number;
  size: number;
  color: string;
}

export interface Layer {
  id: number;
  description: string;
  type: "shape" | "fill"; 
  shapes?: ShapeData[];
  color?: string;
}

export class LayerStore {
  layers: Layer[] = [];
  past: Layer[][] = []; // for undo
  future: Layer[][] = []; // for redo

  constructor() {
    makeAutoObservable(this);
  }

  addLayer = (layer: Omit<Layer, "id">) => {
    this.past.push([...this.layers]);
    this.layers.push({ id: Date.now(), ...layer });
    this.future = [];
  };

  undo() {
    if (this.past.length === 0) return;
    const previous = this.past.pop()!;
    this.future.push([...this.layers]); // save current state for redo
    this.layers = previous;
  }

  redo() {
    if (this.future.length === 0) return;
    const next = this.future.pop()!;
    this.past.push([...this.layers]); // save current state for undo
    this.layers = next;
  }
}

export const layerStore = new LayerStore();
