import Agario from "../sketches/Agario";

const Mitosis = (props: any) => {
  return (
    <div style={{ justifyContent: "space-around", display: "flex" }}>
      <iframe width="600" height="400" src="https://www.youtube.com/embed/-G-3BDlnK58" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div style={{ maxWidth: "50%" }}>
        <h1>Mitosis: Cell Division </h1>
        <p>
          The three previous phases, G1, S, and G2, are all collectively called 'interphase'. The goal of interphase is to prep the cell for division. In the mitosis stage, cell division occurs, and two daughter cells are formed. 
        </p>

        <p>
          Mitosis consists of prophase, metaphase, anaphase, and telophase + cytokinesis. The goal of these stages is to separate the chromosomes in a way such that both daughter cells have a whole set of DNA. 
        </p>

        <p>
          {"<"} The video on the left is a short animation showing the stages of mitosis. 
        </p>

        
        <p>
          Some cells will inevitably stop dividing, some on purpose, and others because of a lack of nutrients. Either way, these cells reach a stage called G0, where a cell simply conducts its intended function without going through all the stages of the cell cycle, like a neuron focusing on transmitting signals instead of growing further.  
        </p>
      </div>
    </div>
  );
};

export default Mitosis;
