import React, { useRef, useState } from "react";
import "./ComputerMain.css";
import { motion } from "framer-motion";
import BigProfile from "./components/computer/bigProfile";
import BigProj from "./components/computer/BigProj";

const IconList = (props) => {
  return (
    <li onClick={() => props.fnc(props.index)}>
      <img src={`img/${props.img}.svg`} alt="about icon" />
      <p>{props.txt}</p>
    </li>
  );
};

export default function ComputerMain() {
  const [showAside, setShowAside] = useState(false);
  const [showModal, setShowModal] = useState(0);
  return (
    <>
      <main>
        <ul id="comIconWrap">
          <IconList img="smile" txt="About" index={0} fnc={setShowModal} />
          <IconList img="folder1" txt="Project" index={1} fnc={setShowModal} />
          <IconList img="star" txt="Toy" index={2} fnc={setShowModal} />
        </ul>
        {showModal == 0 && <BigProfile />}
        {showModal == 1 && <BigProj />}
      </main>
      {showAside && (
        <motion.aside id="comNavModal" initial={{ translateY: 90, opacity: 0.5 }} animate={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
          <motion.ul initial={{ translateY: 40 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
            <li>리스트</li>
            <li>리스트</li>
            <li>리스트</li>
          </motion.ul>
        </motion.aside>
      )}
      <nav id="comNav">
        <button onClick={() => setShowAside(!showAside)}>
          <img src="img/window.png" alt="window" />
          <p>시작</p>
        </button>
      </nav>
    </>
  );
}
