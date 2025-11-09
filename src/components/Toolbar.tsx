// import React from 'react';
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/StoreContext";
import { PiShapes } from "react-icons/pi";
import { RiPaintFill } from "react-icons/ri";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import { FaRegHandPointer } from "react-icons/fa";

const Toolbar = observer(() => {
  const { toolStore, layerStore } = useStores();
  const { tool, setTool } = toolStore;

  return (
    <div
      style={{
        background: "#ebebebff",
        display: "flex",
        gap: "2px",
        width: "300px",
        padding: "5px",
      }}
    >
      <button
        onClick={() => setTool("shape")}
        style={{ background: tool === "shape" ? "#ccc" : "" }}
        title="Shapes"
      >
        <PiShapes />
      </button>
      <button
        onClick={() => setTool("fill")}
        style={{ background: tool === "fill" ? "#ccc" : "" }}
        title="Fill"
      >
        <RiPaintFill />
      </button>
      <button
        onClick={() => setTool("none")}
        style={{ background: tool === "none" ? "#ccc" : "" }}
        title="Cursor"
      >
        <FaRegHandPointer />
      </button>
      <button
        onClick={() => layerStore.undo()}
        disabled={layerStore.layers.length === 0}
        title="Undo"
      >
        <LuUndo2 />
      </button>
      <button
        onClick={() => layerStore.redo()}
        disabled={layerStore.future.length === 0}
        title="Redo"
      >
        <LuRedo2 />
      </button>
    </div>
  );
});

export default Toolbar;
