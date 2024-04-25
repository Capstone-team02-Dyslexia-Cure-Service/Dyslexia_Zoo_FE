import { useRef, useEffect, useState } from "react";

const Convas = () => {
  // useRef
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // getCtx
  const [getCtx, setGetCtx] = useState<CanvasRenderingContext2D | null>(null);
  // painting state
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    // canvas useRef
    const canvas = canvasRef.current;
    canvas!.width = 650;
    canvas!.height = 540;
    const ctx = canvas!.getContext("2d");
    ctx!.lineJoin = "round";
    ctx!.lineWidth = 2.5;
    ctx!.strokeStyle = "#000000";
    setGetCtx(ctx);
  }, []);

  const drawFn = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    // mouse position
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;
    // drawing
    if (!painting) {
      getCtx!.beginPath();
      getCtx!.moveTo(mouseX, mouseY);
    } else {
      getCtx!.lineTo(mouseX, mouseY);
      getCtx!.stroke();
    }
  };

  return (
    <div className="view">
      <div className="canvasWrap">
        <canvas
          className="canvas"
          ref={canvasRef}
          onMouseDown={() => setPainting(true)}
          onMouseUp={() => setPainting(false)}
          onMouseMove={drawFn}
          onMouseLeave={() => setPainting(false)}
        ></canvas>
      </div>
    </div>
  );
};

export default Convas;
