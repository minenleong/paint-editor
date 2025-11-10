import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores/StoreContext";
import "./CanvasArea.css";

const CanvasArea = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { toolStore, layerStore } = useStores();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    layerStore.layers.forEach((layer) => {
      if (layer.type === "fill" && layer.color) {
        ctx.fillStyle = layer.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (layer.type === "shape" && layer.shapes) {
        layer.shapes.forEach((shape) => {
          ctx.fillStyle = shape.color;
          if (shape.type === "circle") {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
            ctx.fill();
          } else if (shape.type === "square") {
            ctx.fillRect(shape.x - shape.size, shape.y - shape.size, 40, 40);
          } else if (shape.type === "rectangle") {
            ctx.fillRect(shape.x - shape.size, shape.y - shape.size, 60, 40);
          } else if (shape.type === "triangle") {
            ctx.beginPath();
            ctx.moveTo(shape.x, shape.y - shape.size);
            ctx.lineTo(shape.x - shape.size, shape.y + shape.size);
            ctx.lineTo(shape.x + shape.size, shape.y + shape.size);
            ctx.closePath();
            ctx.fill();
          }
        });
      }
    });
  }, [layerStore.layers.length]);

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

      const shape = {
        type: selectedShape as "circle" | "square" | "rectangle" | "triangle",
        x,
        y,
        size: 20,
        color: selectedColor,
      };

      if (selectedShape === "circle") {
        ctx.beginPath();
        ctx.arc(x, y, shape.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (selectedShape === "square") {
        ctx.fillRect(x - shape.size, y - shape.size, 40, 40);
      } else if (selectedShape === "rectangle") {
        ctx.fillRect(x - shape.size, y - shape.size, 60, 40);
      } else if (selectedShape === "triangle") {
        ctx.beginPath();
        ctx.moveTo(x, y - shape.size);
        ctx.lineTo(x - shape.size, y + shape.size);
        ctx.lineTo(x + shape.size, y + shape.size);
        ctx.closePath();
        ctx.fill();
      }
      addLayer({
        type: "shape",
        shapes: [shape],
        description: `Added ${selectedShape}`,
      });
    } else if (tool === "fill") {
      ctx.fillStyle = selectedColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      addLayer({
        type: "fill",
        color: selectedColor,
        description: "Filled background",
      });
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onClick={handleCanvasClick}
        className="canvasArea"
      />
    </div>
  );
});

export default CanvasArea;
