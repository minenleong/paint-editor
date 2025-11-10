import { observer } from "mobx-react-lite";
import { useStores } from "../../stores/StoreContext";
import "./LayerPanel.css";

const LayerPanel = observer(() => {
  const { layerStore } = useStores();
  const { layers } = layerStore;

  return (
    <div className="layerPanel">
      <h4>Layers</h4>
      {layers.length === 0 ? (
        <p>No layers yet</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {layers.map((layer) => (
            <li
              key={layer.id}
              className="layerPanel-list"
              // style={{
              //   background: "#fff",
              //   margin: "4px 0",
              //   padding: "4px 8px",
              //   borderRadius: "4px",
              //   fontSize: "14px",
              // }}
            >
              {layer.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default LayerPanel;
