import React, { useRef } from "react";
import { PiLinkBold } from "react-icons/pi";
import { FaGithub, FaArrowRight, FaArrowLeft, FaFigma } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjArt(props) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <article className="projWrap">
      <h3>{props.tit}</h3>
      <div className="projDate">{props.date}</div>
      <div className="projContent">
        <div className="sliWrap">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            arrows={false}
          >
            {props.imgs.map((img, index) => (
              <img key={index} src={`img/proj/${img}`} alt={props.tit} />
            ))}
          </Slider>
          <div className="sliBtnWrap">
            <button onClick={previous}>
              <FaArrowLeft />
            </button>
            <button onClick={next}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="projContentTxt">
          <div className="projDesc">{props.desc}</div>
          <h4>주요 기능</h4>
          <ul>
            {props.lis.map((li, index) => (
              <li key={index}>{li}</li>
            ))}
          </ul>
          {props.compo.map((Com, index) => (
            <Com key={index} />
          ))}
          <hr />
          <div className="porjURLWrap">
            <a href={props.host} target="_blank">
              <p>
                <PiLinkBold />
                홈페이지
              </p>
            </a>
            <a href={props.git} target="_blank">
              <p>
                <FaGithub />
                깃허브
              </p>
            </a>
            {props.fig && (
              <a href={props.fig} target="_blank">
                <p>
                  <FaFigma />
                  와이어프레임
                </p>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
