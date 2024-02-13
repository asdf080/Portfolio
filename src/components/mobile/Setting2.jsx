import React from "react";
import { motion } from "framer-motion";

const Palet = (props) => (
  <article className="mobPalette">
    <div className="mobColorChip"></div>
    <div className="mobColorTxt">
      <p>{props.code}</p>
      <p>{props.name}</p>
    </div>
  </article>
);

export default function Setting2() {
  return (
    <motion.section initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }} className="mobSect">
      <Palet code="#f9fcfd" name="Light grayish cyan" />
      <Palet code="#f9fcfd" name="Light grayish cyan" />
      <Palet code="#f9fcfd" name="Light grayish cyan" />
      <Palet code="#f9fcfd" name="Light grayish cyan" />
      <div style={{ padding: "10px" }}></div>
    </motion.section>
  );
}
