import { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";

const Convas = () => {
  // useRef
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // getCtx
  const [getCtx, setGetCtx] = useState<CanvasRenderingContext2D | null>(null);
  // painting state
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas!.width = 400;
    canvas!.height = 110;
    const ctx = canvas!.getContext("2d");
    ctx!.lineJoin = "round";
    ctx!.lineWidth = 1;
    ctx!.strokeStyle = "#000000";
    setGetCtx(ctx);
  }, []);

  const drawFn = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
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
    <Canvas
      ref={canvasRef}
      onMouseDown={() => setPainting(true)}
      onMouseUp={() => setPainting(false)}
      onMouseMove={drawFn}
      onMouseLeave={() => setPainting(false)}
    />
  );
};

const Canvas = styled.canvas`
  background-color: white;
  border-radius: 5px;
`;

export default Convas;
