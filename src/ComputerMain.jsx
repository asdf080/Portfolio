import React from "react";
import "./ComputerMain.css";

export default function ComputerMain() {
  return (
    <>
      <div id="comNavModal">작업표시줄 모달</div>
      <nav id="comNav">
        <button>
          <img src="img/window.png" alt="window" />
        </button>
        작업표시줄
      </nav>
    </>
  );
}
