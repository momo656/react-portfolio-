import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [showModal, setshowModal] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentMood") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mood flex"
        onClick={() => {
          localStorage.setItem(
            "currentMood",
            theme === "dark" ? "light" : "dark"
          );
          settheme(localStorage.getItem("currentMood"));
        }}
      >
        {theme === "dark" ? (<span className="icon-moon-o"></span>):(<span className="icon-sun"></span>)}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="icon-close"
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}