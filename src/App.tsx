import Toolbar from "./components/toolbar/Toolbar";
import ControlPanel from "./components/controlPanel/ControlPanel";
import CanvasArea from "./components/canvasArea/CanvasArea";
import LayerPanel from "./components/layerPanel/LayerPanel";
import background from "../src/background.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Toolbar />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ControlPanel />
      </div>
      <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
        <CanvasArea />
        <LayerPanel />
      </div>{" "}
    </div>
  );
}

export default App;
