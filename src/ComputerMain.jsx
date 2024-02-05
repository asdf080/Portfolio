import React, { useState } from "react";
import "./ComputerMain.css";
import { motion } from "framer-motion";
import BigProfile from "./components/computer/bigProfile";
import BigProj from "./components/computer/BigProj";
import PopUpWrap from "./components/computer/PopUpWrap";
import BigToyProj from "./components/computer/BigToyProj";

const IconList = (props) => {
  return (
    <li onClick={() => props.fnc(1)}>
      <img src={`img/${props.img}.svg`} alt="about icon" />
      <p>{props.txt}</p>
    </li>
  );
};

export default function ComputerMain() {
  const [showAside, setShowAside] = useState(false);
  const [showModal, setShowModal] = useState({ about: 1, project: 0, toy: 0 });
  const [upZin, setUpZin] = useState({ about: 0, project: 0, toy: 0 });

  const handleModal = (modal, value) => {
    setShowModal((prev) => ({ ...prev, [modal]: value }));
  };
  const handleZin = (modal, value) => {
    setUpZin((prev) => ({ ...prev, [modal]: value }));
  };

  return (
    <>
      <main>
        <ul id="comIconWrap">
          <IconList
            img="smile"
            txt="About"
            fnc={() => {
              handleModal("about", 1);
              handleZin("about", Math.max(...Object.values(upZin)) + 5);
            }}
          />
          <IconList
            img="folder1"
            txt="Project"
            fnc={() => {
              handleModal("project", 1);
              handleZin("project", Math.max(...Object.values(upZin)) + 5);
            }}
          />
          <IconList
            img="star"
            txt="Toy"
            fnc={() => {
              handleModal("toy", 1);
              handleZin("toy", Math.max(...Object.values(upZin)) + 5);
            }}
          />
        </ul>
        {showModal.about === 1 && (
          <PopUpWrap
            text="profile"
            top="30px"
            left="calc(50% - 500px)"
            zIndex={upZin.about}
            upZ={() => handleZin("about", Math.max(...Object.values(upZin)) + 5)}
            onClose={(e) => {
              e.stopPropagation();
              handleModal("about", 0);
              handleZin("about", 0);
            }}
          >
            <BigProfile />
          </PopUpWrap>
        )}
        {showModal.project === 1 && (
          <PopUpWrap
            text="Project"
            top="80px"
            left="calc(50% - 450px)"
            zIndex={upZin.project}
            upZ={() => handleZin("project", Math.max(...Object.values(upZin)) + 5)}
            onClose={(e) => {
              e.stopPropagation();
              handleModal("project", 0);
              handleZin("project", 0);
            }}
          >
            <BigProj />
          </PopUpWrap>
        )}
        {showModal.toy === 1 && (
          <PopUpWrap
            text="Toy Project"
            top="100px"
            left="calc(50% - 400px)"
            zIndex={upZin.toy}
            upZ={() => handleZin("toy", Math.max(...Object.values(upZin)) + 5)}
            onClose={(e) => {
              e.stopPropagation();
              handleModal("toy", 0);
              handleZin("toy", 0);
            }}
          >
            <BigToyProj />
          </PopUpWrap>
        )}
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
