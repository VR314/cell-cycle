import React from "react";
import Sketch from "react-p5";

const canvasSize = 500;

// TODO: does this even need to be a sketch?

const DNAReplication: React.FC = (props) => {

  const setup = (
    p5: import("/workspace/cell-cycle/node_modules/react-p5/node_modules/@types/p5/index.js"),
    canvasParentRef: Element
  ) => {
    // prevents double canvases
    document.getElementsByTagName("main").item(0)?.remove();
    if (canvasParentRef.children.length === 0) {
      p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
    }

    
  };

  const draw = (
    p5: import("/workspace/cell-cycle/node_modules/react-p5/node_modules/@types/p5/index.js")
  ) => {
    p5.background(0);
    
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default DNAReplication;
