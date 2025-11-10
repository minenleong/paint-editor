import { observer } from "mobx-react-lite";
import { useStores } from "../../stores/StoreContext";
import "./ControlPanel.css";

const ControlPanel = observer(() => {
  const { toolStore } = useStores();
  const { tool, selectedColor, selectedShape, setColor, setShape } = toolStore;

  if (tool === "none") return null;

  return (
    <div className="controlPanel">
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
          <label>
            Shape:{" "}
            <select
              id="cp_selectedShape"
              value={selectedShape}
              onChange={(e) => setShape(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "5px",
                background: "#ffffffff",
              }}
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
              <option value="rectangle">Rectangle</option>
              <option value="triangle">Triangle</option>
            </select>
          </label>
        </>
      )}{" "}
      {tool === "fill" && (
        <>
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
