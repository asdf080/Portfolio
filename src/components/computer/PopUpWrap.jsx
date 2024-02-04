import React from "react";
import Draggable from "react-draggable";
import { IoClose } from "react-icons/io5";
import { TbArrowsMaximize } from "react-icons/tb";

export default function PopUpWrap({ children, text, onClose, upZ, top, left, zIndex }) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable handle="#topBar" bounds="body" nodeRef={nodeRef}>
      <div ref={nodeRef} id="popUpWrap" style={{ top, left, zIndex }} onClick={upZ}>
        <div id="topBar">
          <div id="topBarLeft">{text}</div>
          <div id="topBarRight">
            <button>
              <TbArrowsMaximize size="90%" color="#572926" />
            </button>
            <button onClick={onClose}>
              <IoClose size="100%" color="#572926" />
            </button>
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
}
