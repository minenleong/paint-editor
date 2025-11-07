// src/store/LayerStore.ts
import { makeAutoObservable } from "mobx";

export interface Layer {
  id: number;
  description: string;
}

export class LayerStore {
  layers: Layer[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addLayer = (description: string) => {
    this.layers.push({ id: Date.now(), description });
  };

  // removeLastLayer() {
  //   this.layers.pop();
  // }

  // clearLayers() {
  //   this.layers = [];
  // }
}

export const layerStore = new LayerStore();
