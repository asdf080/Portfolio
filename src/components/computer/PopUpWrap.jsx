import React from "react";
import Draggable from "react-draggable";

export default function PopUpWrap({ children, text }) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable handle="#topBar" bounds="body" nodeRef={nodeRef}>
      <div ref={nodeRef} id="popUpWrap">
        <div id="topBar">
          <div id="topBarLeft">{text}</div>
          <div id="topBarRight">right</div>
        </div>
        {children}
      </div>
    </Draggable>
  );
}
