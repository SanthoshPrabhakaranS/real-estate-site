import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="ring-loading"
      />
    </div>
  );
};

export default Loader;
