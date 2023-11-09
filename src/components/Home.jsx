import React from 'react'
import { animate, motion } from 'framer-motion';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import me from '../assests/prakash_img-removebg-preview.png'
import { useRef } from 'react';


const Home = () => {

    
   
    const animations = {
        h1: {
            initial:{
                x: "100%",
                opacity:0,
            },
            whileInView:{
                x: 0,
                opacity:1,
            }
        },
        button: {
            initial: {
                y: "100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }


  return (
      <div id='home' >
          <section>
              <div>
                  
                  <motion.h1
                    {...animations.h1}
                  >
                      Hi, I Am <br />
                      Prakash Kumar
                  </motion.h1>
               
                  <Typewriter options={{
                      strings: ['A Competitive programmer', 'A Web Develpoer', "Expert On Codeforces", "3⭐ On CodeChef"],
                      autoStart: true,
                      loop: true, 
                      cursor:'',
                      wrapperClassName:'typewriterpara'
                  }}
                  />

                  <div>
                      <a href='mailto:prakashprajapat651@gmail.com'>Hire me </a>
                      <a href='#work'>Projects <BsArrowUpRight/> </a>
                  </div>
                 
                  <article>
                      <p>
                          +<span>600</span>
                      </p>
                      <span>DSA Question Solved</span>
                  </article>
                  <aside> 
                     <article>
                      <p>
                          +<span>5</span>
                      </p>
                      <span>project made</span>
                      </article>

                      <article data-special>
                          <p>
                               Contact
                          </p>
                          <span>prakashprajapat651@gmail.com</span>
                      </article>
                  </aside>       
              </div>
          </section>
          <section>
              <img src={me} alt="Prakash" />
          </section>
    </div>
  )
}

export default Home