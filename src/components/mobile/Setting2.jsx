import React, { useState } from "react";
import { motion } from "framer-motion";

const Palet = (props) => (
  <article className="mobPalette" onClick={props.onClick}>
    <div style={{ background: `#${props.code}` }} className="mobColorChip"></div>
    <div className="mobColorTxt">
      <p>#{props.code}</p>
      <p>{props.name}</p>
    </div>
  </article>
);

export default function Setting2() {
  const [mobColors, setMobColors] = useState({
    mobCustomColor: "#fff",
  });
  const changeMobColors = (color) => {
    setMobColors(() => {
      document.documentElement.style.setProperty("--mobCustomColor", color);

      return { mobCustomColor: color };
    });
  };

  return (
    <motion.section initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }} className="mobSect">
      <Palet code="ffffff" name="default white" onClick={() => changeMobColors("#fff")} />
      <Palet code="fffaee" name="pale orange" onClick={() => changeMobColors("#fffaee")} />
      <Palet code="f9f7ff" name="soft purple" onClick={() => changeMobColors("#f9f7ff")} />
      <Palet code="f9fcfd" name="Light grayish cyan" onClick={() => changeMobColors("#f9fcfd")} />
      <div style={{ padding: "10px" }}></div>
    </motion.section>
  );
}
