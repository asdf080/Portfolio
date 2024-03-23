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
            <p>#8B9599</p>
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
      <article id="creditWrap">
        <h3>CREDIT</h3>
        <ul>
          <li>
            <a href="https://www.flaticon.com/kr/free-icon/search-engine_6104678?term=%EA%B2%80%EC%83%89&page=1&position=6&origin=search&related_id=6104678" title="검색 아이콘" target="blank" rel="noopener noreferrer">
              검색 아이콘: nawicon - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/kr/free-icon/calculators_11258833?term=%EA%B3%84%EC%82%B0%EA%B8%B0&page=1&position=23&origin=search&related_id=11258833" title="계산자 아이콘" target="blank" rel="noopener noreferrer">
              계산 아이콘: VectorPortal - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/kr/free-icon/calendar_2773274?term=%EB%8B%AC%EB%A0%A5&page=1&position=72&origin=search&related_id=2773274" title="일 아이콘" target="blank" rel="noopener noreferrer">
              달력 아이콘: Freepik - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/free-vector/hand-drawn-retro-computer-windows-element_41099709.htm#page=2&query=retro%20ui%20kit&position=33&from_view=keyword&track=ais&uuid=67d3ce04-85d6-4c54-beac-bfd2986da798" target="blank" rel="noopener noreferrer">
              메인 아이콘: pikisuperstar&nbsp;
            </a>
            - Freepik
          </li>
          <li>
            <a href="https://www.flaticon.com/kr/free-icon/jewels_306776?term=%EB%B3%B4%EC%84%9D&page=1&position=28&origin=search&related_id=306776" title="보석 아이콘" target="blank" rel="noopener noreferrer">
              보석 아이콘: Freepik - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/kr/free-icon/windows_888882?term=%EC%9C%88%EB%8F%84%EC%9A%B0&page=1&position=2&origin=search&related_id=888882" title="로고 아이콘" target="blank" rel="noopener noreferrer">
              윈도우 아이콘: Pixel perfect - Flaticon
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
