import { useEffect, useState } from "react";
import "./App.scss";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoDesktopOutline,
} from "react-icons/io5";
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const themes = ["light", "dark", "system"];

  useEffect(() => {
    switch (theme) {
      case "dark": {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      }
      case "light": {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      }
      default: {
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
      }
    }
  }, [theme]);

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  return (
    <div className="app pt-20 pb-20 min-h-screen dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="app__bg app__bg--1"></div>
      <div className="app__bg app__bg--2"></div>
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded flex items-center">
        {themes.map((item) => (
          <button
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 flex items-center justify-center  ${
              item === theme ? "text-sky-600" : ""
            }`}
            key={item}
            onClick={() => setTheme(item)}
          >
            {item === "light" ? (
              <IoSunnyOutline />
            ) : item === "dark" ? (
              <IoMoonOutline />
            ) : item === "system" ? (
              <IoDesktopOutline />
            ) : null}
          </button>
        ))}
      </div>
      <div className="max-w-3xl xm-auto px-5 flex flex-col justify-center">
        <h1 className="text-4xl">React + Tailwind Theme Switch</h1>
        <h3 className="text-2xl">Light, Dark & System Options</h3>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <p className="mt-10" key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nulla sed earum non ad repudiandae vitae, tempora culpa facilis aut
            fugit ratione assumenda rem aperiam ut natus ducimus vel magnam. At
            vel consequuntur eum deserunt magnam repellat cumque culpa ut error
            laudantium maxime molestiae, nisi rem! Iusto dolores dolore vel
            itaque sunt similique ipsam cum, error animi tempora aut dolorem!
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
