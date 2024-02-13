import React, { useState } from "react";
import "./MobileMain.css";
import { motion } from "framer-motion";
import { Profile, Project, SideProject } from "./components/mobile/mobile";
import "./utils/scrollNav";
import Setting2 from "./components/mobile/Setting2";

const List = (props) => {
  return (
    <motion.li whileTap={{ scale: 0.96 }} onClick={() => props.fnc(props.index)} ref={props.listRef}>
      <div>
        <img src={`img/${props.img}.svg`} alt={props.txt} />
      </div>
      <p>{props.txt}</p>
    </motion.li>
  );
};

export default function MobileMain() {
  const [sectionId, setSectionId] = useState(0);

  return (
    <>
      {sectionId == 0 && <Profile />}
      {sectionId == 1 && <Project />}
      {sectionId == 2 && <SideProject />}
      {sectionId == 3 && <Setting2 />}
      <nav id="mobileNav">
        <ul>
          {/* 선택된 아이콘 바꾸는 기능 추가할것 */}
          <List img={sectionId === 0 ? "smile2" : "smile"} txt="프로필" index={0} fnc={setSectionId} />
          <List img={sectionId === 1 ? "folder2" : "folder1"} txt="프로젝트" index={1} fnc={setSectionId} />
          <List img={sectionId === 2 ? "folder2" : "folder1"} txt="사이드" index={2} fnc={setSectionId} />
          <List img="palette" txt="설정" index={3} fnc={setSectionId} />
        </ul>
      </nav>
    </>
  );
}
