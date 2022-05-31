import Agario from "../sketches/Agario";

const G2 = (props: any) => {
  return (
    <div style={{ justifyContent: "space-around", display: "flex" }}>
      <Agario />
      <div style={{ maxWidth: "50%" }}>
        <h1>G2: Cell Growth</h1>
        <p>The</p>

        <p>Internally</p>

        <p>
          {"<"} The minigame to the left represents a cell consuming nutrients
          and other cells from its envia=ronment. Use arrow keys to control the
          movement of the dark green cell and eat as much food as you can.
        </p>
      </div>
    </div>
  );
};

export default G2;
