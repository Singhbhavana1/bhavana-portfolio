import React from "react";
import styled from "styled-components";
import { BallCanvas } from "./canvas";
import { SectionWrap } from "../hoc";
import { technologies } from "../constants";
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Tech = () => {
  return (
    <div>
      <Title>Skills</Title>
      <Desc
        style={{
          marginBottom: "40px",
        }}
      >
        Here are some of my skills on which I have been working on for the past
        2 years.
      </Desc>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrap(Tech, "skills");
