import React, { useState } from "react";
import "./style/Setting.css";

export default function Setting() {
  const [colors, setColors] = useState({
    mainColor: "#fdd8b6",
    mainColor2: "#fff5e7",
  });

  const changeColors = (color1, color2) => {
    setColors(() => {
      document.documentElement.style.setProperty("--mainColor", color1);
      document.documentElement.style.setProperty("--mainColor2", color2);

      return { mainColor: color1, mainColor2: color2 };
    });
  };

  return (
    <section className="comWindow" style={{ padding: "15px", paddingRight: "5px", background: "#f1f1f1" }}>
      <article id="setWrap">
        <div className="platte" onClick={() => changeColors("#fdd8b6", "#fff5e7")}>
          <div className="colorChip" style={{ background: "#fdd8b6" }}></div>
          <div className="colorTxt">
            <p>sleepy peach</p>
            <p>#FDD8B6</p>
          </div>
        </div>
        <div className="platte" onClick={() => changeColors("#F7E0FA", "#FBF0FE")}>
          <div className="colorChip" style={{ background: "#F7E0FA" }}></div>
          <div className="colorTxt">
            <p>overdose pink</p>
            <p>#F7E0FA</p>
          </div>
        </div>
        <div className="platte" onClick={() => changeColors("#b5c3c9", "#dde6e9")}>
          <div className="colorChip" style={{ background: "#b5c3c9" }}></div>
          <div className="colorTxt">
            <p>insipid gray</p>
            <p>#8b9599</p>
          </div>
        </div>
        <div className="platte" onClick={() => changeColors("#b4e7b3", "#cbf7ca")}>
          <div className="colorChip" style={{ background: "#b4e7b3" }}></div>
          <div className="colorTxt">
            <p>Cozy green</p>
            <p>#A2CBA1</p>
          </div>
        </div>
      </article>
    </section>
  );
}
