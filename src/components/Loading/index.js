import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      style={{
        width: "80vw",
        height: "30rem",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactLoading
        type={"cylon"}
        color="var(--main-green)"
        height={50}
        width={75}
      />
    </div>
  );
};

export default Loading;
