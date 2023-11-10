import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiOutlineArrowUp,
    AiFillLinkedin,
    AiFillCode
} from "react-icons/ai";

import Myimg from '../assests/myimage.jpeg'

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={Myimg}
                    alt="Founder"
                />

                <h2>Prakash Kumar</h2>
                <p>Coding is the art of turning challenges into elegant solutions.</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://www.linkedin.com/in/prakash-prajapat-b30645205/" target={"blank"}>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://leetcode.com/Prakash_k651/" target={"blank"}>
                        <AiFillCode />
                    </a>
                    <a href="https://github.com/PKP1411" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;