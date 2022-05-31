import Agario from "../sketches/Agario";

const G2 = (props: any) => {
  return (
    <div style={{ justifyContent: "space-around", display: "flex" }}>
      <Agario />
      <div style={{ maxWidth: "50%" }}>
        <h1>G2: Cell Growth (again) </h1>
        <p>
          The goal of G2 is to continue growth and finish final preparations for
          cell division.
        </p>

        <p>
          During the G2, the cell grows more, makes more proteins and
          organelles, and begins to orient its organelles in preparation for
          mitosis.
        </p>

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
