import React from "react";
import { motion } from "framer-motion";
import { AiFillApi, AiFillCode, AiFillHtml5 } from "react-icons/ai";
import winner_certi from "../assests/winner_certi.jpeg"

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="experience">
      <h2>Experience</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1st Rank</h3>
          <p>In CodeHack Hackthon</p>
          <img src={winner_certi} alt="" />
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillHtml5/>
          <span>Frontend web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <AiFillApi />
          <span>Backend Web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillCode />
          <span>Data Stucture and Algoritham In Cpp</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;