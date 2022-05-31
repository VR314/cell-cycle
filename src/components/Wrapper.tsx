import React from "react";

// TODO: bold the current page
// TODO: style buttons

const Wrapper = (props: any) => {
  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: 0,
          padding: "15px",
          background: "red",
          marginTop: 0,
          justifyItems: "stretch",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button
            onClick={() => {
              if (props.pageID > 0) {
                props.setPageID(props.pageID - 1);
              }
            }}
          >
            BACK
          </button>
        </div>
        <div>
          <div className="chevron"> G1 </div>
          <div className="chevron"> S </div>
          <div className="chevron"> G2 </div>
          <div className="chevron"> MITOSIS </div>
        </div>
        <div>
          <button
            onClick={() => {
              if (props.pageID < 5) {
                props.setPageID(props.pageID + 1);
              }
            }}
          >
            NEXT
          </button>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Wrapper;
