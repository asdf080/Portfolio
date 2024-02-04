import React from "react";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.section className="mobSect" initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
      1번째섹션: 프로젝트
    </motion.section>
  );
}
