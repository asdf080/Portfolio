import React from "react";
import { motion } from "framer-motion";
import BigProfile from "./../computer/BigProfile";

export default function Profile() {
  return (
    <motion.section className="mobSect" initial={{ translateY: 200 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
      <BigProfile />
    </motion.section>
  );
}
