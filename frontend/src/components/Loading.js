import React from "react";
import loadingImg from "../images/loading.gif";

export default function Loading() {
  return (
    <div>
      <img src={loadingImg} alt="loading_img" />
      <h3>Loading...</h3>
    </div>
  );
}
