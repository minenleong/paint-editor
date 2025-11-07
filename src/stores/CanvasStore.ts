// src/store/CanvasStore.ts
import { makeAutoObservable } from "mobx";

export class CanvasStore {
  backgroundColor = "#ffffff";
  actions: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fillCanvas(color: string) {
    this.backgroundColor = color;
    this.actions.push(`Filled canvas with ${color}`);
  }

  // addAction(description: string) {
  //   this.actions.push(description);
  // }

  // clearCanvas() {
  //   this.actions = [];
  //   this.backgroundColor = "#ffffff";
  // }
}

export const canvasStore = new CanvasStore();
