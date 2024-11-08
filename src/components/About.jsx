import React from "react";
import { bio } from "../constants";
import styled, { useTheme } from "styled-components";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrap } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const ButtonContainer = styled.div`
    // width: 40%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 12px 6px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
  const GithubButton = styled.a`
    border: 2px solid #dfd9ff;
    color: #dfd9ff;
    background: linear-gradient(to left, #2d3a49, #412f47);
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    &:hover {
      background: white;
      color: #4c00b0;
    }
  `;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a passionate frontend developer with a focus on creating intuitive
        and engaging user experiences .As a frontend developer with expertise in
        Angular, React, Node.js, and other technologies, I’m dedicated to
        crafting seamless, engaging user experiences. Currently, I’m a Frontend
        Developer at Imperial Overseas, where I’ve built dynamic applications
        that meet client needs and push the boundaries of usability. I love
        collaborating with teams to turn creative ideas into functional designs,
        and I’m always exploring new ways to improve my skills. Let’s connect if
        you share a passion for web development or have exciting opportunities
        to discuss!
      </motion.p>
      <ButtonContainer>
        <GithubButton href={bio.github} target="_Blank">
          Check Resume
        </GithubButton>
      </ButtonContainer>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrap(About, "about");
