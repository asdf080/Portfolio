import React from "react";
import "./BigProfile.css";
import { FaUserAstronaut, FaBirthdayCake, FaMailBulk, FaMapMarkerAlt, FaGithub, FaLink } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export default function BigProfile() {
  return (
    <section className="comWindow">
      <article className="welcomeWrap">
        <h1>Welcom to my SPACE!</h1>
        <div>안녕하세요. 포트폴리오입니다.</div>
      </article>
      <article className="profileWrap">
        <div className="profImg">
          <img src="img/rocket.png" alt="rocket" />
        </div>
        <div className="profTxt">
          <div>
            <p className="pBold">
              <FaUserAstronaut />
              &nbsp; name
            </p>
            <p>이름</p>
          </div>
          <div>
            <p className="pBold">
              <FaBirthdayCake />
              &nbsp; birth day
            </p>
            <p>생년월일</p>
          </div>
          <div>
            <p className="pBold">
              <FaMapMarkerAlt />
              &nbsp; location
            </p>
            <p>The Earth</p>
          </div>
          <div>
            <p className="pBold">
              <FaMailBulk />
              &nbsp; e-mail
            </p>
            <p>kntabz81@gmail.com</p>
          </div>
        </div>
      </article>
      <div className="btnWrap">
        <button>
          <FaGithub />
          깃허브
        </button>
        <button>
          <SiNotion />
          노션
        </button>
        <button>
          <FaLink />
          블로그
        </button>
      </div>
      <div className="skillsWrap">
        <h3>SKILLS</h3>
        <div className="skillsIconWrap">
          <div>
            <img src="img/icon/html.svg" alt="html" />
            <p>HTML</p>
          </div>
          <div>
            <img src="img/icon/css.svg" alt="css" />
            <p>CSS</p>
          </div>
          <div>
            <img src="img/icon/js.svg" alt="js" />
            <p>JS</p>
          </div>
          <div>
            <img src="img/icon/react.svg" alt="react" />
            <p>REACT</p>
          </div>
          <div>
            <img src="img/icon/tail.svg" alt="tail wind" />
            <p>Tailwind</p>
          </div>
          <div>
            <img src="img/icon/figma.svg" alt="figma" />
            <p>Figma</p>
          </div>
          <div>
            <img src="img/icon/xd.svg" alt="adobe xd" />
            <p>XD</p>
          </div>
          <div>
            <img src="img/icon/ps.svg" alt="adobe photoshop" />
            <p>PhotoShop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
