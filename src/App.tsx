import Toolbar from "./components/Toolbar";
import ControlPanel from "./components/ControlPanel";
import CanvasArea from "./components/CanvasArea";
import LayerPanel from "./components/LayerPanel";
import background from "../public/background.jpg";

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
