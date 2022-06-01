import React from "react";
import Sketch from "react-p5";

const canvasSize = 500;

const DNAReplication: React.FC = (props) => {
  let template = [" ", " "];
  let entered = [" ", " "];
  let currentIndex = 2;
  let correct = true;

  const setup = (
    p5: import("/workspace/cell-cycle/node_modules/react-p5/node_modules/@types/p5/index.js"),
    canvasParentRef: Element
  ) => {
    // prevents double canvases
    document.getElementsByTagName("main").item(0)?.remove();
    if (canvasParentRef.children.length === 0) {
      p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
    }

    if (template.length === 2) {
      for (let i = 0; i < 500; i++) {
        let randInt = Math.round(Math.random() * 4); // random number from 0 to 4
        switch (randInt) {
          case 0:
            template.push("A");
            break;
          case 1:
            template.push("G");
            break;
          case 2:
            template.push("T");
            break;
          case 3:
            template.push("C");
            break;
        }
      }
      console.log(template);
    }
  };

  const draw = (
    p5: import("/workspace/cell-cycle/node_modules/react-p5/node_modules/@types/p5/index.js")
  ) => {
    p5.background(0);
    // render template strand at the top
    p5.stroke("#FFFFFF");
    p5.fill(0);
    p5.rect(25, 50, 450, 100);
    let n = 5;
    let x = 25;
    let dx = 450 / n;
    for (let i = 0; i < 5; i++) {
      p5.stroke("#FFFFFF");
      p5.fill(0);
      p5.rect(x + i * dx, 50, dx, 100);
      p5.fill("#FFFFFF");
      p5.textAlign("center", "center");
      p5.textSize(45);
      p5.text(template[currentIndex + i - 2], x + i * dx, 50, dx, 100);
    }

    p5.stroke("#FF0000");
    p5.fill("#FF0000");
    p5.triangle(250, 155, 225, 200, 275, 200);

    // render score in the middle

    // render typed strand at bottom
    p5.stroke("#FFFFFF");
    p5.fill(0);
    p5.rect(25, 350, 450, 100);

    for (let i = 0; i < 5; i++) {
      p5.stroke("#FFFFFF");
      p5.fill(0);
      p5.rect(x + i * dx, 350, dx, 100);
      p5.fill("#FFFFFF");
      p5.textAlign("center", "center");
      p5.textSize(45);
      // fix rendering incorrect typed letters as red
      if (i === 2) {
        if (!correct) {
          p5.fill("#FF0000");
        }
        p5.text(entered[currentIndex + i - 2], x + i * dx, 350, dx, 100);
        p5.fill('#FFFFFF')
      } else {
        if (entered.length <= currentIndex + i - 1) {
          continue;
        } else {
          p5.text(entered[currentIndex + i - 2], x + i * dx, 350, dx, 100);
        }
      }
    }
  };


  //TODO: after correct letter guessed, remove all of entered after that letter (to prevent extras)
  const keyPressed = (e: { key: any }) => {
    console.log(e.key);
    switch (e.key) {
      case "a":
        entered[currentIndex] = "A";
        if (template[currentIndex] === "T") {
          correct = true;
          currentIndex++;
        } else {
          correct = false;
        }
        console.log(template[currentIndex]);
        console.log(e.key);
        break;
      case "g":
        entered[currentIndex] = "G";
        if (template[currentIndex] === "C") {
          correct = true;
          currentIndex++;
        } else {
          correct = false;
        }
        console.log(template[currentIndex]);
        console.log(e.key);
        break;
      case "t":
        entered[currentIndex] = "T";
        if (template[currentIndex] === "A") {
          correct = true;
          currentIndex++;
        } else {
          correct = false;
        }
        console.log(template[currentIndex]);
        console.log(e.key);
        break;
      case "c":
        entered[currentIndex] = "C";
        if (template[currentIndex] === "G") {
          correct = true;
          currentIndex++;
        } else {
          correct = false;
        }
        console.log(template[currentIndex]);
        console.log(e.key);
        break;
      default:
        console.log(e.key);
        // props.setPageID(1);
        break;
    }
  };

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />;
};

export default DNAReplication;
