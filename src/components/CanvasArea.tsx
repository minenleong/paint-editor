import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/StoreContext";

const CanvasArea = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { toolStore, layerStore } = useStores();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleCanvasClick = (e: React.MouseEvent) => {
    const { tool, selectedColor, selectedShape } = toolStore;
    const { addLayer } = layerStore;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === "shape") {
      ctx.fillStyle = selectedColor;
      if (selectedShape === "circle") {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
      } else if (selectedShape === "square") {
        ctx.fillRect(x - 20, y - 20, 40, 40);
      } else if (selectedShape === "rect") {
        ctx.fillRect(x - 20, y - 20, 60, 40);
      } else if (selectedShape === "triangle") {
        ctx.beginPath();
        ctx.moveTo(x, y - 20);
        ctx.lineTo(x - 20, y + 20); 
        ctx.lineTo(x + 20, y + 20); 
        ctx.closePath();
        ctx.fill(); 
      }
      addLayer(`Added ${selectedShape}`);
    } else if (tool === "fill") {
      ctx.fillStyle = selectedColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      addLayer("Filled background");
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onClick={handleCanvasClick}
        style={{
          border: "1px solid #ccc",
          margin: "20px",
          cursor: "crosshair",
          background: "#fff",
        }}
      />
    </div>
  );
});

export default CanvasArea;
