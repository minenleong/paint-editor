import { observer } from "mobx-react-lite";
import { useStores } from "../../stores/StoreContext";
import { PiShapes } from "react-icons/pi";
import { RiPaintFill } from "react-icons/ri";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import { FaRegHandPointer } from "react-icons/fa";
import "./Toolbar.css";

const Toolbar = observer(() => {
  const { toolStore, layerStore } = useStores();
  const { tool, setTool } = toolStore;

  return (
    <div className="toolbar">
      <button
        onClick={() => setTool("shape")}
        style={{ background: tool === "shape" ? "#4B8BBE" : "#f7f9f9" }}
        title="Shapes"
      >
        <PiShapes color={toolStore.tool === "shape" ? "white" : "black"} />
      </button>
      <button
        onClick={() => setTool("fill")}
        style={{ background: tool === "fill" ? "#4B8BBE" : "#f7f9f9" }}
        title="Fill"
      >
        <RiPaintFill color={toolStore.tool === "fill" ? "white" : "black"} />
      </button>
      <button
        onClick={() => setTool("none")}
        style={{ background: tool === "none" ? "#4B8BBE" : "#f7f9f9" }}
        title="Cursor"
      >
        <FaRegHandPointer
          color={toolStore.tool === "none" ? "white" : "black"}
        />
      </button>
      <button
        onClick={() => layerStore.undo()}
        disabled={layerStore.layers.length === 0}
        title="Undo"
        style={{ background: layerStore.layers.length === 0 ? "" : "#f7f9f9" }}
      >
        <LuUndo2 />
      </button>
      <button
        onClick={() => layerStore.redo()}
        disabled={layerStore.future.length === 0}
        title="Redo"
        style={{ background: layerStore.future.length === 0 ? "" : "#f7f9f9" }}
      >
        <LuRedo2 />
      </button>
    </div>
  );
});

export default Toolbar;
