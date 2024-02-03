import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.section initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
      0번째섹션: 프로필
    </motion.section>
  );
}
