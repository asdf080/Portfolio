import React, { useState } from "react";
import "./MobileMain.css";
import { motion } from "framer-motion";
import { Profile, Project, SideProject } from "./components/mobile/mobile";
import "./utils/scrollNav";

const List = (props) => {
  return (
    <motion.li whileTap={{ scale: 0.96 }} onClick={() => props.fnc(props.index)} ref={props.listRef}>
      <div>
        <img src={`img/${props.img}.svg`} alt="img" />
      </div>
      <p>{props.txt}</p>
    </motion.li>
  );
};

const Section3 = (props) => {
  return (
    <motion.section initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
      3번째섹션
    </motion.section>
  );
};

export default function MobileMain() {
  const [sectionId, setSectionId] = useState(0);

  return (
    <>
      {sectionId == 0 && <Profile />}
      {sectionId == 1 && <Project />}
      {sectionId == 2 && <SideProject />}
      {sectionId == 3 && <Section3 />}
      <nav id="mobileNav">
        <ul>
          {/* 선택된 아이콘 바꾸는 기능 추가할것 */}
          <List img="smile" txt="프로필" index={0} fnc={setSectionId} />
          <List img="folder1" txt="프로젝트" index={1} fnc={setSectionId} />
          <List img="star" txt="사이드" index={2} fnc={setSectionId} />
          <List img="folder1" txt="아이콘" index={3} fnc={setSectionId} />
        </ul>
      </nav>
    </>
  );
}
