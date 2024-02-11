import React from "react";
import { HtmlIcon, CssIcon, JsIcon, JQueryIcon, ReacIcon, TailwindIcon } from "../Icon";
import { PiLinkBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const ToyProjArt = (props) => (
  <article className="projWrap">
    <h3>{props.tit}</h3>
    <div className="projDate">{props.date}</div>
    <div className="projContent toyContent">
      <img src={`img/${props.img}.png`} alt={props.tit} />
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
          <a href={props.link1} target="_blank">
            <p>
              <PiLinkBold />
              홈페이지
            </p>
          </a>
          <a href={props.link2} target="_blank">
            <p>
              <FaGithub />
              깃허브
            </p>
          </a>
        </div>
      </div>
    </div>
  </article>
);

export default function BigToyProj() {
  return (
    <section className="comWindow">
      <ToyProjArt tit="Memory Cards Game" img="toyCard" date="2024.01.11 ~ 2024.01.13" desc="카드를 뒤집어 짝을 맞추는 게임입니다." lis={["setInterval을 이용한 타이머 및 시간 제한"]} compo={[HtmlIcon, CssIcon, JsIcon]} link1="https://asdf080.github.io/Memory-Cards/" link2="https://github.com/asdf080/Memory-Cards" />
      <ToyProjArt tit="WORDLE" img="toyWor" date="2024.01.08 ~ 2024.01.09" desc="words API를 이용해 만든 WORDLE 게임입니다." lis={["async await로 비동기 api 호출"]} compo={[HtmlIcon, CssIcon, JsIcon]} link1="https://asdf080.github.io/WORDLE/" link2="https://github.com/asdf080/WORDLE" />
      <ToyProjArt tit="TETRIS" img="toyTetris" date="2024.01.05 ~ 2024.01.06" desc="바닐라 JS로 만든 테트리스 게임입니다." lis={["createElement, childNodes 등 DOM 제어를 이용한 블록 생성", "childNodes로 한줄 완성 체크", "로컬 스토리지에 점수 저장"]} compo={[HtmlIcon, CssIcon, JsIcon]} link1="https://asdf080.github.io/TETRIS/" link2="https://github.com/asdf080/TETRIS" />
      <ToyProjArt tit="JUMPING DUCK" img="toyDuck" date="2024.01.02 ~ 2024.01.04" desc="크롬 공룡 게임을 모티브로 만든 미니게임입니다." lis={["canvas 태그와 requestAnimationFrame 함수로 이미지 생성 및 애니메이션 효과"]} compo={[HtmlIcon, CssIcon, JsIcon]} link1="https://asdf080.github.io/JUMPING-DUCK/" link2="https://github.com/asdf080/JUMPING-DUCK" />
      <ToyProjArt tit="Cat image maker" img="toyCat" date="2023.12.30" desc="오픈 API로 생성한 랜덤한 고양이 사진에 원하는 텍스트를 입력할 수 있는 웹페이지입니다." lis={["오픈 API로 무작위 이미지 생성", "로컬 스토리지에 이미지 저장"]} compo={[ReacIcon]} link1="https://asdf080.github.io/Cat-Img-Maker/" link2="https://github.com/asdf080/Cat-Img-Maker" />
    </section>
  );
}
