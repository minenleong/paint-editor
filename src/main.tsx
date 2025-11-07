import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StoreProvider } from "./stores/StoreContext";
import { toolStore } from "./stores/ToolStore.ts";
 
if (typeof window !== "undefined") {
  (window as any).toolStore = toolStore;
  console.log("🔍 MobX store available as window.toolStore");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
)
