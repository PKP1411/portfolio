import React from "react";
import styled, { keyframes, css } from "styled-components";

import a from '../assests/pngwing.com.png';
import b from '../assests/javascript.png';
import c from '../assests/node.png';
import d from '../assests/redux.png'
import g from '../assests/typescript.png'
import f from "../assests/express.png"
import h from "../assests/mongodb.png"

function Skill() {
  const row1 = [
    { img: a, t: 1 },
    { img: b, t: 2 },
    { img: c, t: 3 },
    { img: d, t: 4 },

    { img: g, t: 6 },
    { img: f, t: 7 },
    { img: h, t: 8 },



  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <AppContainer id='skill'>

      <Wrapper>
        <Text id = "txt">Skills.</Text>
        <Note>Proficient in C++ for DSA, ensuring efficient code.</Note>
        <Note>Full-stack developer skilled in both frontend and backend.</Note>
        <Note>Codeforces expert with a consistent high rating.</Note>
        <Note>LeetCode rating of 1800+, showcasing strong problem-solving.</Note>
        <Note>Strong grasp of computer fundamentals.</Note>
        <Note>Proficient in SQL and DBMS for effective data management.</Note>
        <Note>Integrates frontend and backend for cohesive applications.</Note>
        <Note>Collaborative team contributor with a competitive coding edge.</Note>
       
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup >
                <Image key={index} src={el.img} alt="prakash" />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup >
                <Image key={index} src={el.img} alt="prakash" />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        
      </Wrapper>
    </AppContainer>
  );
}

export default Skill;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 1200px;
  animation: ${scrollX} 15s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;