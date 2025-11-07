import Toolbar from "./components/Toolbar";
import ControlPanel from "./components/ControlPanel";
import CanvasArea from "./components/CanvasArea";
import LayerPanel from "./components/LayerPanel";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Toolbar />
      <ControlPanel />
      <div style={{ display: "flex", flex: 1 }}>
        <CanvasArea />
        <LayerPanel />
      </div>{" "}
    </div>
  );
}

export default App;
