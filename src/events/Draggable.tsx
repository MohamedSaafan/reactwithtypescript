import React from "react";
import { Interface } from "readline";

interface Props {}

const Draggable: React.FC<Props> = () => {
  const onDragStart = (e: React.DragEvent<HTMLInputElement>) => {
    console.log(e.pageY);
  };
  return (
    <div draggable onDragStart={onDragStart}>
      this is a draggable div
    </div>
  );
};
export default Draggable;
