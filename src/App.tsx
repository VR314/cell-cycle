import * as React from "react";
import "./style.css";
import Wrapper from "./components/Wrapper";
import G1 from "./pages/G1";
import S from "./pages/S";
import G2 from "./pages/G2";
import Mitosis from "./pages/Mitosis";

export default function App() {
  let [pageID, setPageID] = React.useState(0);
  switch (pageID) {
    case 0:
      return (
        <Wrapper
          title={"G1: Cell Growth"}
          pageID={pageID}
          setPageID={setPageID}
        >
          <G1 setPageID={setPageID} />
        </Wrapper>
      );
    case 1:
      return (
        <Wrapper
          title={"S: DNA Replication"}
          pageID={pageID}
          setPageID={setPageID}
        >
          <S setPageID={setPageID} />
        </Wrapper>
      );
    case 2:
      return (
        <Wrapper
          title={"G2: Cell Growth"}
          pageID={pageID}
          setPageID={setPageID}
        >
          <G2 setPageID={setPageID} />
        </Wrapper>
      );

    case 3:
      return (
        <Wrapper
          title={"Mitosis: Cell Division"}
          pageID={pageID}
          setPageID={setPageID}
        >
          <Mitosis setPageID={setPageID} />
        </Wrapper>
      );
    default:
      return <h1> The End </h1>;
  }
}
