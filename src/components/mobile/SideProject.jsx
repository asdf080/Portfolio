import React from "react";
import { motion } from "framer-motion";
import BigToyProj from "./../computer/BigToyProj";

export default function SideProject() {
  return (
    <motion.section className="mobSect" initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
      <BigToyProj />
    </motion.section>
  );
}
