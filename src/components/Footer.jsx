import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/92254687"}
          alt="Founder"
        />

        <h2>Priyanka Barate</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://github.com/baratepriyanka" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/baratepriyanka" target={"blank"}>
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