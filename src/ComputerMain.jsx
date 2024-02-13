import React, { useEffect, useRef, useState } from "react";
import "./ComputerMain.css";
import { motion, Reorder } from "framer-motion";
import BigProfile from "./components/computer/BigProfile";
import BigProj from "./components/computer/BigProj";
import PopUpWrap from "./components/computer/PopUpWrap";
import BigToyProj from "./components/computer/BigToyProj";
import Setting from "./components/computer/Setting";
import Calculator from "./components/computer/Calculator";

const IconList = (props) => {
  return (
    <li onClick={() => props.fnc(1)}>
      <img src={`img/${props.img}.svg`} alt={props.txt} />
      <p>{props.txt}</p>
    </li>
  );
};

export default function ComputerMain() {
  const [showAside, setShowAside] = useState(false);
  const asideRef = useRef();
  const [showModal, setShowModal] = useState({ about: 1, project: 0, toy: 0, setting: 0, calcul: 0 });
  const [upZin, setUpZin] = useState({ about: 0, project: 0, toy: 0, setting: 0, calcul: 0 });
  const [navThum, setNavThum] = useState([0, 1, 2, 3]);

  const handleModal = (modal, value) => {
    setShowModal((prev) => ({ ...prev, [modal]: value }));
  };
  const handleZin = (modal, value) => {
    setUpZin((prev) => ({ ...prev, [modal]: value }));
  };

  const 가장높은Z = Object.keys(upZin).reduce((a, b) => (upZin[a] > upZin[b] ? a : b));

  const 바깥쪽클릭 = (event) => {
    if (asideRef.current && !asideRef.current.contains(event.target)) {
      setShowAside(false); // aside 바깥쪽을 클릭하면 닫힘
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트되면 document에 클릭 이벤트 리스너 추가
    document.addEventListener("click", 바깥쪽클릭, true);
    return () => {
      // 컴포넌트가 언마운트되면 이벤트 리스너 제거
      document.removeEventListener("click", 바깥쪽클릭, true);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시 한 번만 실행되게 함

  return (
    <>
      <main>
        <ul id="comIconWrap">
          <IconList
            img={showModal.about === 1 ? "smile2" : "smile"}
            txt="About"
            fnc={() => {
              handleModal("about", 1);
              handleZin("about", Math.max(...Object.values(upZin)) + 5);
            }}
          />
          <IconList
            img={showModal.project === 1 ? "folder2" : "folder1"}
            txt="Project"
            fnc={() => {
              handleModal("project", 1);
              handleZin("project", Math.max(...Object.values(upZin)) + 5);
            }}
          />
          <IconList
            img={showModal.toy === 1 ? "folder2" : "folder1"}
            txt="Toy Project"
            fnc={() => {
              handleModal("toy", 1);
              handleZin("toy", Math.max(...Object.values(upZin)) + 5);
            }}
          />
          <IconList
            img="palette"
            txt="Setting"
            fnc={() => {
              handleModal("setting", 1);
              handleZin("setting", Math.max(...Object.values(upZin)) + 5);
            }}
          />
        </ul>
        {showModal.about === 1 && (
          <PopUpWrap
            text="profile"
            top="5%"
            left="calc(50% - 500px)"
            zIndex={upZin.about}
            upZ={() => handleZin("about", Math.max(...Object.values(upZin)) + 5)}
            onClose={(e) => {
              e.stopPropagation();
              handleModal("about", 0);
              handleZin("about", 0);
            }}
            color1="#F0D473"
            color2="#F0B072"
          >
            <BigProfile />
          </PopUpWrap>
        )}
        {showModal.project === 1 && (
          <PopUpWrap
            text="Project"
            top="13%"
            left="calc(50% - 450px)"
            zIndex={upZin.project}
            upZ={() => handleZin("project", Math.max(...Object.values(upZin)) + 5)}
            onClose={(e) => {
              e.stopPropagation();
              handleModal("project", 0);
              handleZin("project", 0);
            }}
            color1="#D7E9FF"
            color2="#BBDAF6"
          >
            <BigProj />
          </PopUpWrap>
        )}
        {showModal.toy === 1 && (
          <PopUpWrap
            text="Toy Project"
            top="21%"
            left="calc(50% - 400px)"
            zIndex={upZin.toy}
            upZ={() => handleZin("toy", Math.max(...Object.values(upZin)) + 5)}
            onClose={(e) => {
              e.stopPropagation();
              handleModal("toy", 0);
              handleZin("toy", 0);
            }}
            color1="#D7E9FF"
            color2="#BBDAF6"
          >
            <BigToyProj />
          </PopUpWrap>
        )}
        {showModal.setting === 1 && (
          <PopUpWrap
            className="smallModal"
            text="setting"
            top="8%"
            left="50%"
            zIndex={upZin.setting}
            upZ={() => handleZin("setting", Math.max(...Object.values(upZin)) + 5)}
            onClose={(e) => {
              e.stopPropagation();
              handleModal("setting", 0);
              handleZin("setting", 0);
            }}
            color1="#B4E7B3"
            color2="#a8dfb1"
          >
            <Setting />
          </PopUpWrap>
        )}
        {showModal.calcul === 1 && (
          <Calculator
            top="50px"
            left="150px"
            zIndex={upZin.calcul}
            upZ={() => handleZin("calcul", Math.max(...Object.values(upZin)) + 5)}
            onClose={(e) => {
              e.stopPropagation();
              handleModal("calcul", 0);
              handleZin("calcul", 0);
            }}
          />
        )}
      </main>
      {showAside && (
        <motion.aside ref={asideRef} id="comNavModal" initial={{ height: 200 + "px", opacity: 0 }} animate={{ height: 450 + "px", opacity: 1 }} transition={{ duration: 0.4 }}>
          <motion.ul initial={{ translateY: 40 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }} onClick={() => setShowAside(!showAside)}>
            <a href="https://asdf080.github.io/TETRIS/" target="_blank">
              <li>
                <img src="img/cubeIcon.png" alt="TETRIS" /> <p>TETRIS</p>
              </li>
            </a>
            <a href="https://asdf080.github.io/Memory-Cards/" target="_blank">
              <li>
                <img src="img/gemIcon.png" alt="Card Game" /> <p>Card Game</p>
              </li>
            </a>
            <a href="https://asdf080.github.io/Laptop-intro/test.html" target="_blank">
              <li>
                <img src="img/lapIcon.png" alt="Card Game" /> <p>Search Laptop</p>
              </li>
            </a>
            <li
              onClick={() => {
                handleModal("calcul", 1);
                handleZin("calcul", Math.max(...Object.values(upZin)) + 5);
              }}
            >
              <img src="img/caculIcon.png" alt="Calculator" /> <p>Calculator</p>
            </li>
          </motion.ul>
        </motion.aside>
      )}

      <nav id="comNav">
        <button className={`startBtn ${showAside ? "clicked" : ""}`} onClick={() => setShowAside(!showAside)}>
          <img src="img/window.png" alt="window" />
          <p>시작</p>
        </button>
        <Reorder.Group as="div" axis="x" values={navThum} onReorder={setNavThum}>
          {showModal.about === 1 && (
            <Reorder.Item as="button" key={navThum[0]} value={navThum[0]} className={`modalThum ${가장높은Z === "about" ? "upZ" : ""}`} onClick={() => handleZin("about", Math.max(...Object.values(upZin)) + 5)}>
              <img src="img/smile.svg" alt="about" />
              about
            </Reorder.Item>
          )}
          {showModal.project === 1 && (
            <Reorder.Item as="button" key={navThum[1]} value={navThum[1]} className={`modalThum ${가장높은Z === "project" ? "upZ" : ""}`} onClick={() => handleZin("project", Math.max(...Object.values(upZin)) + 5)}>
              <img src="img/folder1.svg" alt="project" />
              project
            </Reorder.Item>
          )}
          {showModal.toy === 1 && (
            <Reorder.Item as="button" key={navThum[2]} value={navThum[2]} className={`modalThum ${가장높은Z === "toy" ? "upZ" : ""}`} onClick={() => handleZin("toy", Math.max(...Object.values(upZin)) + 5)}>
              <img src="img/folder1.svg" alt="toy project" />
              toy project
            </Reorder.Item>
          )}
          {showModal.setting === 1 && (
            <Reorder.Item as="button" key={navThum[3]} value={navThum[3]} className={`modalThum ${가장높은Z === "setting" ? "upZ" : ""}`} onClick={() => handleZin("setting", Math.max(...Object.values(upZin)) + 5)}>
              <img src="img/palette.svg" alt="setting" />
              setting
            </Reorder.Item>
          )}
        </Reorder.Group>
      </nav>
    </>
  );
}
