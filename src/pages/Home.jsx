import React from "react";
import Hero from "../components/Home/Home";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Hero />
    </motion.div>
  );
}

export default Home;
