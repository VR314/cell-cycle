import React, { Dispatch, SetStateAction } from "react";
import Sketch from "react-p5";

const canvasSize = 500;

interface Vector {
  x: number;
  y: number;
}

class Blob {
  active: boolean;
  main: boolean;
  position: Vector;
  direction: Vector;
  speed: number;
  radius: number;
  color: string;

  // TODO: figure out ugly import
  constructor(
    p5: import("/workspace/cell-cycle/node_modules/react-p5/node_modules/@types/p5/index.js"),
    position: Vector,
    radius: number,
    main: boolean,
    color: string | null
  ) {
    this.active = true;
    this.main = main;
    this.position = position;
    this.direction = { x: 0, y: 0 };
    this.speed = 10;
    this.radius = radius;
    this.color = color
      ? color
      : "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  eat(b: Blob) {
    this.radius = Math.sqrt(this.radius * this.radius + b.radius * b.radius);
    b.active = false;
    this.speed = 13 - Math.pow(this.radius, 1.0 / 3);
  }
}

interface AgarioProps {
  setPageID: Dispatch<SetStateAction<number>>;
}

const Agario: React.FC<AgarioProps> = (props) => {
  let main: Blob;
  let smalls: Blob[] = [];

  const setup = (
    p5: import("/workspace/cell-cycle/node_modules/react-p5/node_modules/@types/p5/index.js"),
    canvasParentRef: Element
  ) => {
    // prevents double canvases
    document.getElementsByTagName("main").item(0)?.remove();
    if (canvasParentRef.children.length === 0) {
      p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
    }

    main = new Blob(p5, { x: 50, y: 50 }, 30, true, "#228C22");
    for (let i = 0; i < canvasSize / 50; i++) {
      smalls.push(
        new Blob(
          p5,
          { x: Math.random() * canvasSize, y: Math.random() * canvasSize },
          Math.random() * 10 + 5,
          false,
          null
        )
      );
    }
  };

  const draw = (
    p5: import("/workspace/cell-cycle/node_modules/react-p5/node_modules/@types/p5/index.js")
  ) => {
    p5.background(0);
    p5.strokeWeight(0.5);
    smalls = smalls.filter((b) => b.active);
    for (let b of smalls) {
      let dist = Math.sqrt(
        (b.position.x - main.position.x) * (b.position.x - main.position.x) +
          (b.position.y - main.position.y) * (b.position.y - main.position.y)
      );

      if (dist < main.radius * 0.7) {
        main.eat(b);
      }
    }

    if (smalls.length < canvasSize / 50) {
      if (Math.random() < 0.1 * (canvasSize / 50 - smalls.length)) {
        smalls.push(
          new Blob(
            p5,
            { x: Math.random() * canvasSize, y: Math.random() * canvasSize },
            Math.random() * 10 + 10,
            false,
            null
          )
        );
      }
    }

    for (let b of smalls) {
      p5.fill(b.color);
      p5.ellipse(b.position.x, b.position.y, b.radius, b.radius);
    }

    let x = main.position.x + (main.direction.x * main.speed) / 60;
    let y = main.position.y - (main.direction.y * main.speed) / 60; // subtract in y direction bc up is "negative y"
    x = Math.min(x, canvasSize);
    x = Math.max(x, 0);
    y = Math.min(y, canvasSize);
    y = Math.max(y, 0);

    main.position = {
      x,
      y,
    };

    p5.stroke("#00");
    p5.strokeWeight(1);
    p5.fill(main.color);
    p5.ellipse(main.position.x, main.position.y, main.radius, main.radius);
  };

  const keyReleased = (e: { key: any }) => {
    switch (e.key) {
      case "ArrowUp":
        main.direction = { x: 0, y: 10 };
        break;
      case "ArrowDown":
        main.direction = { x: 0, y: -10 };
        break;
      case "ArrowRight":
        main.direction = { x: 10, y: 0 };
        break;
      case "ArrowLeft":
        main.direction = { x: -10, y: 0 };
        break;
      default:
        console.log("extra key pressed");
        props.setPageID(1);
        break;
    }
  };

  return <Sketch setup={setup} draw={draw} keyReleased={keyReleased} />;
};

export default Agario;
