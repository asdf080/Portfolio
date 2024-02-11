import React, { useEffect, useRef, useState } from "react";
import "./style/Calculator.css";
import { FaPlus, FaMinus, FaDivide, FaXmark } from "react-icons/fa6";
import Draggable from "react-draggable";

const InputBtn = (props) => <input className="circleBtn" type="button" value={props.val} onClick={props.onClick} />;

export default function Calculator({ top, left, zIndex, onClose, upZ }) {
  const containerRef = useRef(null);
  const [value, setValue] = useState("0");

  useEffect(() => {
    const container = containerRef.current;
    const items = container.children;
    const radius = container.offsetWidth / 2;

    Array.from(items).forEach((item, index) => {
      const angle = index * (360 / items.length) * (Math.PI / 180); // 라디안 각도 계산
      const x = radius + radius * Math.cos(angle) - item.offsetWidth / 2; // X 위치
      const y = radius + radius * Math.sin(angle) - item.offsetHeight / 2; // Y 위치

      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
    });
  }, []);
  const nodeRef = React.useRef(null);

  const handleInput = (input) => {
    setValue((prev) => (prev === "0" ? input : prev + input));
  };
  const handleOperation = (operation) => {
    setValue((prev) => (/[0-9]$/.test(prev) ? prev + operation : prev));
  };

  const 숫자계산 = () => {
    try {
      const 계산식 = value.replace(/×/g, "*").replace(/÷/g, "/");
      const result = Function('"use strict";return (' + 계산식 + ")")();
      setValue(result.toString());
    } catch (error) {
      setValue("error");
    }
  };

  return (
    <Draggable handle="#calTapBar" bounds="body" nodeRef={nodeRef}>
      <section id="calSect" ref={nodeRef} style={{ top, left, zIndex }} onClick={upZ}>
        <div id="calTapBar">
          <button id="calClose" onClick={onClose}>
            <FaXmark />
          </button>
        </div>
        <article id="calWrap">
          <div id="calculator">
            <form>
              <div>
                <input
                  id="numInput"
                  type="text"
                  name="display"
                  value={value}
                  onChange={(event) => {
                    const { value } = event.target;
                    if (/^[0-9+\-*/]+$/.test(value) || value === "") {
                      setValue(value);
                    }
                  }}
                />
              </div>
              <div id="calBtnWrap">
                <div id="circleTopBtn">
                  <input type="button" value="AC" onClick={() => setValue("")} />
                  <input type="button" value="DEL" onClick={() => setValue(value.slice(0, -1))} />
                  <input type="button" value="=" onClick={숫자계산} style={{ fontSize: "28px", lineHeight: "26px" }} />
                </div>
                <div ref={containerRef} id="circleWrap">
                  <InputBtn val="2" onClick={() => handleInput("2".toString())} />
                  <InputBtn val="3" onClick={() => handleInput("3".toString())} />
                  <InputBtn val="4" onClick={() => handleInput("4".toString())} />
                  <InputBtn val="5" onClick={() => handleInput("5".toString())} />
                  <InputBtn val="6" onClick={() => handleInput("6".toString())} />
                  <InputBtn val="7" onClick={() => handleInput("7".toString())} />
                  <InputBtn val="8" onClick={() => handleInput("8".toString())} />
                  <InputBtn val="9" onClick={() => handleInput("9".toString())} />
                  <InputBtn val="0" onClick={() => handleInput("0".toString())} />
                  <InputBtn val="00" onClick={() => handleInput("00".toString())} />
                  <InputBtn val="1" onClick={() => handleInput("1".toString())} />
                </div>
                <div id="plusWrap">
                  <button className="circleBtn" type="button" onClick={() => handleOperation("+")}>
                    <FaPlus size="50%" />
                  </button>
                  <button className="circleBtn" type="button" onClick={() => handleOperation("-")}>
                    <FaMinus size="50%" />
                  </button>
                  <button className="circleBtn" type="button" onClick={() => handleOperation("×")}>
                    <FaXmark size="50%" />
                  </button>
                  <button className="circleBtn" type="button" onClick={() => handleOperation("÷")}>
                    <FaDivide size="50%" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </article>
      </section>
    </Draggable>
  );
}
