import * as React from 'react';
import './style.css';
import Agario from './sketches/Agario';
import Wrapper from './components/Wrapper';

export default function App() {
  let [pageID, setPageID] = React.useState(0);
  let [agarioScore, setAgarioScore] = React.useState(0);
  switch (pageID) {
    case 0:
      return (
        <Wrapper title={'G1: Cell Growth'}>
           <Agario agarioScore={agarioScore} setAgarioScore={setAgarioScore}/>
           <h1>Score: {agarioScore}</h1>
        </Wrapper>
      );
    case 1:
      return <h1> test1 </h1>;
    default:
      return <h1> unimplemented page </h1>;
  }
}
