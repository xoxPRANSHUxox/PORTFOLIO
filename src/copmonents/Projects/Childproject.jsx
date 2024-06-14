import React from "react";

export default function Childproject(props) {
  return (
    <div className="my-5 flex flex-col items-center ">
      <img src={props.src} alt="Projects" className="w-2/4 my-4" />
      <div className="ProjectName text-white text-2xl">{props.Name}</div>
      <div className="ProjectName text-white w-3/4 text-center">{props.Info}</div>

      <button
        type="button"
        class="text-orange-400 hover:text-white border border-yellow-400 mt-4 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-4 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
       >
        <a href="https://pranshuxoxtodoapp.netlify.app/" target="_blank" rel="noreferrer">
        Watch Live</a>
      </button>
    </div>
  );
}
