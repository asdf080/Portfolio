import React, { useState } from "react";
import "./ComputerMain.css";
import { motion } from "framer-motion";

export default function ComputerMain() {
  const [showAside, setShowAside] = useState(false);
  return (
    <>
      <main>
        <ul id="comIconWrap">
          <li>
            <img src="img/smile.svg" alt="about icon" />
            <p>About</p>
          </li>
          <li>
            <img src="img/folder1.svg" alt="project icon" />
            <p>Project</p>
          </li>
          <li>
            <img src="img/star.svg" alt="project icon" />
            <p>Toy</p>
          </li>
        </ul>
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
        </button>
        작업표시줄
      </nav>
    </>
  );
}
