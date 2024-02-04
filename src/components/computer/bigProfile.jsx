import React from "react";
import "./BigProfile.css";
import { FaUserAstronaut, FaBirthdayCake, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

export default function BigProfile() {
  return (
    <section className="comWindow">
      <div className="profileWrap">
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
      </div>
      <div>깃허브</div>
      <div>노션</div>
      <div>블로그</div>
      <div>스킬</div>
    </section>
  );
}
