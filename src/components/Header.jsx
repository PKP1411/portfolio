import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
// import resume from '../assests/'

const Header = () => {
  return (
    <>
      <nav>
        <NavContent  />
      </nav>

    </>
  );
};



const NavContent = () => (
  <>
    <h2>Prakash Kumar</h2>
    <div>
      <a  href="#home">
        Home
      </a>
      <a  href="#work">
        Work
      </a>
      <a id = "timelen" href="#timeline">
        Timeline
      </a>
      <a  href="#experience">
        Experience
      </a>
      <a  href="#skill">
        Skill
      </a>
      <a href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:prakashprajapat651@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;