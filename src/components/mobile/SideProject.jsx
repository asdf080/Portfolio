import React from "react";
import { motion } from "framer-motion";

export default function SideProject() {
  return (
    <motion.section className="mobSect" initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
      2번째섹션: 사이드 프로젝트
    </motion.section>
  );
}
