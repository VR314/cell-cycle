import Agario from "../sketches/Agario";

const G1 = (props: any) => {
  return <div style={{ justifyContent: "space-around", display: "flex" }}>
  <Agario setPageID={props.setPageID} />
  <div>
    <h1>G1: Cell Growth</h1>
    <p>
      The first stage of the cell cycle is G1, where the cell's main goal is
      to grow in size
    </p>
    <p>
      Internally, organelles are copied and the molecular building blocks for future stages are built up.
    </p>
    <p>
      {'<'} The minigame to the left represents a cell consuming nutrients from its environment and 
    </p>
  </div>
</div>
};

export default G1;
