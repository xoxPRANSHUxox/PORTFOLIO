import React from "react";
import about from "../../assets/about.jpg";
import "./About.css";
export default function About() {
  return (
    <div id="about">

      <p className="text-yellow-400 border-yellow-400 text-6xl text-center decoration-double">About Me</p>

      <div className="About w-full ">

      <img src={about} alt="aboutImage" className="aboutImage w-3/6 m-4 rounded circle" />

      <section className="aboutText w-3/6 text-yellow-300 ">
          Web Developer with expertise of React.js, Redux, HTML and CSS.
          currently learning Next.JS for Web Application. I am passionate
          programmer and a learner, born and brought up in India. I love
          learning about new technologies, what problems are they solving and
          How can I use them to build better and scalable products.
          <br />
      </section>

      </div>

        <div className="AboutButtons flex flex-row items-center justify-center w-full">
          <button
            type="button"
            class="text-yellow-400 hover:text-white border border-yellow-400 mt-4 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
           <a rel="noreferrer"
            href="https://www.instagram.com/pranshu_kumar4238/"
            target="_blank"
          >Let's Talk</a>
          </button>
          <button
            type="button"
            class="text-yellow-400 hover:text-white border border-yellow-400 mt-4 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            <a rel="noreferrer" href="https://drive.google.com/file/d/1VZ_TxdhNBP0i0ak4ocSsvb2xxD9YXsd-/view?usp=sharing" target="_blank">My Resume</a>
          </button>
          <button
            type="button"
            class="text-yellow-400 hover:text-white border border-yellow-400 mt-4 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            <a rel="noreferrer" href="https://github.com/xoxPRANSHUxox" target="_blank">Github</a>
          </button>
          <button
            type="button"
            class="text-yellow-400 hover:text-white border border-yellow-400 mt-4 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            <a rel="noreferrer" href="https://www.linkedin.com/messaging/thread/2-YWZjYzZjNmEtOThhZC00YTIyLTgwNGMtZjA2MmNhOWM2MzI5XzAxMg==/" target="_blank">Linked In</a>
          </button>
      </div>

    </div>
  );
}



