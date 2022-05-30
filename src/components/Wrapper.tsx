import React from "react";

// add breadcrumbs/status in the top (a mini cycle image)
// https://stackoverflow.com/questions/49810663/add-text-in-css-chevron-shape

// TODO: implement next/back buttons on the top, next to the chevron styling at the top

const Wrapper = (props: any) => {
  return (
    <div>
      <div style={{ position: "sticky", top: 0, padding: '15px', background: 'red', marginTop: 0 }}>HEader</div>
      {/* <h1>{props.title}</h1> */}
      {props.children}
    </div>
  );
};

export default Wrapper;
