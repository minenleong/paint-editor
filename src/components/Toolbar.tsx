// import React from 'react';
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/StoreContext";

const Toolbar = observer(() => {
  const { toolStore, layerStore } = useStores();
  const { tool, setTool } = toolStore;

  return (
    <div
      style={{
        background: "#f4f4f4",
        padding: "8px",
        display: "flex",
        gap: "8px",
      }}
    >
      <button
        onClick={() => setTool("shape")}
        style={{ background: tool === "shape" ? "#ccc" : "" }}
      >
        Shape
      </button>
      <button
        onClick={() => setTool("fill")}
        style={{ background: tool === "fill" ? "#ccc" : "" }}
      >
        Fill
      </button>
      <button
        onClick={() => setTool("none")}
        style={{ background: tool === "none" ? "#ccc" : "" }}
      >
        None
      </button>
      <button
        onClick={() => layerStore.undo()}
        disabled={layerStore.layers.length === 0}
      >
        Undo
      </button>
      <button
        onClick={() => layerStore.redo()}
        disabled={layerStore.future.length === 0}
      >
        Redo
      </button>
    </div>
  );
});

export default Toolbar;
