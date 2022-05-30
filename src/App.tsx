import * as React from "react";
import "./style.css";
import Wrapper from "./components/Wrapper";
import G1 from "./pages/G1";
import S from "./pages/S";


export default function App() {
  let [pageID, setPageID] = React.useState(0);
  switch (pageID) {
    case 0:
      return (
        <Wrapper title={"G1: Cell Growth"} pageID={pageID}>
          <G1 setPageID={setPageID} />
        </Wrapper>
      );
    case 1:
      return (
      <Wrapper title={"G1: Cell Growth"}>
        <S setPageID={setPageID} />
      </Wrapper>
      )
    default:
      return <h1> unimplemented page </h1>;
  }
}
