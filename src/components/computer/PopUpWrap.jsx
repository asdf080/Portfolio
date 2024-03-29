import React from "react";
import Draggable from "react-draggable";
import { IoClose } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PopUpWrap({ children, text, onClose, upZ, top, left, zIndex, color1, color2, className = "" }) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable handle="#topBar" bounds="body" nodeRef={nodeRef}>
      <div ref={nodeRef} id="popUpWrap" className={className} style={{ top, left, zIndex }} onClick={upZ}>
        <div id="topBar" style={{ background: color1 }}>
          <h2 id="topBarLeft">{text}</h2>
          <div id="topBarRight" style={{ background: color2 }}>
            <button style={{ padding: "3px" }}>
              <motion.span whileTap={{ scale: 0.3 }} transition={{ type: "spring", stiffness: 450, damping: 17 }}>
                <FaRegStar size="100%" color="#572926" />
              </motion.span>
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
