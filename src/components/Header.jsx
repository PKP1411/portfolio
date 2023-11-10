import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
// import resume from '../assests/'

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      {/* <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button> */}
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Prakash Kumar</h2>
    <div>
      <a  href="#home">
        Home
      </a>
      <a  href="#work">
        Work
      </a>
      <a  href="#timeline">
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