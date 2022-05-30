import * as React from "react";
import "./style.css";
import Wrapper from "./components/Wrapper";
import G1 from "./pages/G1";

// add breadcrumbs/status in the top (a mini cycle image)
// https://stackoverflow.com/questions/49810663/add-text-in-css-chevron-shape

export default function App() {
  let [pageID, setPageID] = React.useState(0);
  switch (pageID) {
    case 0:
      return (
        <Wrapper title={"G1: Cell Growth"}>
          <G1 setPageID={setPageID} />
        </Wrapper>
      );
    case 1:
      return <h1> test1 </h1>;
    default:
      return <h1> unimplemented page </h1>;
  }
}
