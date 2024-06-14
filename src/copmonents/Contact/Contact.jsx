import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div id="contact" className="">
      <section className="Contact my-4 w-4/5 ">
        <p className="text-yellow-400 border-yellow-400 text-6xl text-center decoration-double">
          Contact Me
        </p>

        <div className="btnGrp w-full my-4 flex">
          <div className="twoButton flex flex-row">
            <a rel="noreferrer"
            href="https://www.instagram.com/pranshu_kumar4238/"
            target="_blank"
          >
            <button
              type="button"
              class="text-white-400 hover:text-white border border-pink-400 mt-4 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-pink-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            >
              Instagram
            </button>
          </a>
          <a rel="noreferrer" href="https://github.com/xoxPRANSHUxox" target="_blank">
            <button
              type="button"
              class="text-white-400 hover:text-white border border-yellow-400 mt-4 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            >
              Github
            </button>
          </a>
         </div>
         
          <div className="twoButton flex flex-row">
          <a rel="noreferrer" href="https://www.linkedin.com/messaging/thread/2-YWZjYzZjNmEtOThhZC00YTIyLTgwNGMtZjA2MmNhOWM2MzI5XzAxMg==/" target="_blank"><button
            type="button"
            class="text-white-400 hover:text-white border border-blue-400 mt-4 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            LinkedIn
          </button></a>

          <a rel="noreferrer" href="https://www.pranshubabu1450651@gmail.com" target="_blank"><button
            type="button"
            class="text-green
            -400 hover:text-white border border-red-400 mt-4 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            G_mail
          </button></a>
          </div>
          
          
            
        </div>
        <p className="my-4 text-yellow-400 border-yellow-400 text-xl text-center decoration-double">
          A website Created By Pranshu
        </p>
      </section>
    </div>
  );
}
