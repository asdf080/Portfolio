import React, { useRef } from "react";
import "./BigProj.css";
import { HTML, CSS, JS } from "../Icon";
import { PiLinkBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BigProj() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <section className="comWindow">
      <article className="projWrap">
        <h3>To do List</h3>
        <div className="projDate">2023.12.14 ~ 2023.12.18</div>
        <div className="projContent">
          <div className="sliWrap">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              arrows={false}
            >
              <img src="img/todo1.png" alt="To do List" />
              <img src="img/todo2.png" alt="To do List" />
            </Slider>
            <div className="sliBtnWrap">
              <button onClick={previous}>
                <GrPrevious />
              </button>
              1/2
              <button onClick={next}>
                <GrNext />
              </button>
            </div>
          </div>
          <div className="projContentTxt">
            <div className="projDesc">할 일을 메모하고 정리할 수 있는 To-do-list입니다.</div>
            <h4>주요 기능</h4>
            <ul>
              <li>로컬 스토리지를 이용한 메모 저장 및 삭제</li>
              <li>Weather API를 이용한 현재 장소의 날씨 표기</li>
              <li>명언 API를 이용한 랜덤 명언 표기</li>
            </ul>
            <HTML />
            <CSS />
            <JS />
            <hr />
            <div className="porjURLWrap">
              <a href="https://asdf080.github.io/To-do-list/" target="_blank">
                <p>
                  <PiLinkBold />
                  홈페이지
                </p>
              </a>
              <a href="https://github.com/asdf080/To-do-list" target="_blank">
                <p>
                  <FaGithub />
                  깃허브
                </p>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
