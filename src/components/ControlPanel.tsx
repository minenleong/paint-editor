
import { observer } from "mobx-react-lite";
// import { toolStore } from "../stores/ToolStore";
import { useStores } from "../stores/StoreContext";

const ControlPanel = observer(() => {
  const { toolStore } = useStores();
  const { tool, selectedColor, selectedShape, setColor, setShape } = toolStore;

  if (tool === "none") return null; // nothing selected

  return (
    <div
      style={{
        // position: "fixed",
        top: "60px",
        left: "10px",
        padding: "10px",
        // background: "#fff",
        // borderRadius: "8px",
        // boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {tool === "shape" && (
        <>
          <label>
            Color:{" "}
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          {/* <br /> */}
          <label>
            Shape:{" "}
            <select
              value={selectedShape}
              onChange={(e) => setShape(e.target.value)}
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
              <option value="rectangle">Rectangle</option>
              <option value="triangle">Triangle</option>
            </select>
          </label>
        </>
      )}

      {tool === "fill" && (
        <>
          <h4>Fill Tool</h4>
          <label>
            Fill Color:{" "}
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </>
      )}
    </div>
  );
});

export default ControlPanel;
