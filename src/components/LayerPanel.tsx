import { observer } from "mobx-react-lite";
import { useStores } from "../stores/StoreContext";

const LayerPanel = observer(() => {
  const { layerStore } = useStores();
  const { layers } = layerStore;

  return (
    <div
      style={{
        margin: "20px",
        width: "180px",
        background: "#f7f7f7",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        alignSelf: "flex-start", 
        height: "auto", 
      }}
    >
      <h4>Layers</h4>
      {layers.length === 0 ? (
        <p>No layers yet</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {layers.map((layer) => (
            <li
              key={layer.id}
              style={{
                background: "#fff",
                margin: "4px 0",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "14px",
              }}
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
