import Toolbar from "./components/toolbar/Toolbar";
import ControlPanel from "./components/controlPanel/ControlPanel";
import CanvasArea from "./components/canvasArea/CanvasArea";
import LayerPanel from "./components/layerPanel/LayerPanel";
import "./App.css";

function App() {
  return (
    <div className="background-default">
      <div className="styling">
        <Toolbar />
      </div>
      <div className="styling">
        <ControlPanel />
      </div>
      <div className="styling">
        <CanvasArea />
        <LayerPanel />
      </div>
    </div>
  );
}

export default App;
