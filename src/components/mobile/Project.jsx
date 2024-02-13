import React from "react";
import { motion } from "framer-motion";
import BigProj from "../computer/BigProj";

export default function Project() {
  return (
    <motion.section className="mobSect" initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
      <BigProj />
    </motion.section>
  );
}
