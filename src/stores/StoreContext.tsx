// src/stores/StoreContext.tsx
import React, { createContext, useContext } from "react";
import { toolStore } from "../stores/ToolStore";
import { layerStore } from "../stores/LayerStore";

interface RootStore {
  toolStore: typeof toolStore;
  layerStore: typeof layerStore;
}

const StoreContext = createContext<RootStore | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StoreContext.Provider value={{ toolStore, layerStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStores = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStores must be used within a StoreProvider");
  return context;
};
