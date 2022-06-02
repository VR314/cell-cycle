import DNAReplication from "../sketches/DNAReplication";

const S = (props: any) => {
  return (
    <div style={{ justifyContent: "space-around", display: "flex" }}>
      <DNAReplication />
      <div style={{ maxWidth: "50%" }}>
        <h1>S: DNA Replication</h1>
        <p>
          During S phase, the cell duplicates its DNA and centrosomes, so that after the cell divides, both daughter cells will have a full set of DNA each. 
        </p>

        <p>
          {"<"} The minigame to the left represents the replication of DNA, where a new strand is formed, complementary to the template strand. The template strand is at the top, and you are to enter the complementary strand below it as fast as possible. 
        </p>
      </div>
    </div>
  );
};

export default S;
