import React, { useState } from "react";
import vg from "../assests/mongodb.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.js";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disableBtn, setDisableBtn] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setDisableBtn(true);
        try {
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                message,
            });
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message Sent");
            setDisableBtn(false);
        } catch (error) {
            toast.error("Error");
            console.log(error);
            setDisableBtn(false);
        }
    };

    const animations = {
        form: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },

        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.5,
            },
        },
    };
    return (
        <div id="contact">
            <section>
                <motion.form onSubmit={submitHandler} {...animations.form}>
                    <h2>Contact Me</h2>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Your Message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <motion.button
                        disabled={disableBtn}
                        className={disableBtn ? "disableBtn" : ""}
                        {...animations.button}
                        type="submit"
                    >
                        Send
                    </motion.button>
                </motion.form>
            </section>
            <aside>
                <h1>About Me</h1>
                <p>As a final-year Chemical Engineering student at IIT Roorkee, I bring a unique perspective to software development, combining a strong analytical foundation with a passion for coding. Eager to transition into the dynamic field of software development, I have acquired a solid understanding of programming languages and software engineering principles. My academic rigor at IIT Roorkee, coupled with hands-on experience in coding, positions me as a versatile candidate ready to contribute innovative solutions to the world of software development</p>
            </aside>
        </div>
    );
};

export default Contact;