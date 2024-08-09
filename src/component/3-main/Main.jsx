import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
const myProjects = [
  {
    title: "Personal Website",
    category: "css",
    img: "./personal.png",
    pra: "My website has a responsive design and the option to switch to dark mode.",
    git: "https://github.com/momo656/personal-web-site",
    link: "https://mohamed-abdelsalam-eosin.vercel.app/",
  },
  {
    title: "Landing Page",
    category: "JS",
    img: "./land.png",
    pra: "Dynamic animation and innovative design showcased on the landing page.Experience the seamless interaction and captivating visuals that bring creativity to life with every scroll and click. Let your senses be enthralled by the modern aesthetics and engaging user experience.",
    git: "https://github.com/momo656/landing-page",
    link: "https://momo656.github.io/landing-page/",
  },
  {
    title: "Products Management",
    category: "JS",
    img: "./pro.png",
    pra: "Efficiently manage products with our system: Create detailed entries, add multiple products in a single step, edit or delete as needed. Powerful search and bulk deletion streamline your workflow. Optimize your product management with ease.",
    git: "https://github.com/momo656/Product-management-project",
    link: "https://momo656.github.io/Product-management-project/",
  },
  {
    title: "Admin Dashboard",
    category: "react",
    img: "./dashboard.png",
    pra: "Efficiently manage products with our system: Create detailed entries, add multiple products in a single step, edit or delete as needed. Powerful search and bulk deletion streamline your workflow. Optimize your product management with ease.",
    git: "https://github.com/momo656/admin-dashboard",
    link: "https://vercel.com/momo656s-projects/admin-dashboard/Hg5vTW1iY4GLTMZtHKd9s7YXQhdp",
  },
  {
    title: "Travel Landing Page",
    category: "react",
    img: "./Travel.png",
    pra: "I have adapted the station page and designed it attractively for tourism. The exclusive page for popular tourist destinations features attractive images and multiple booking options. The page also contains a subscription form and contact details to attract potential customers.",
    git: "https://travel-landingpage-rho.vercel.app/",
    link: "https://travel-landingpage-rho.vercel.app/",
  },
];

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, seAtrr] = useState(myProjects);
  const buttonHadle = (category) => {
    setcurrentActive(category);
    const newArr = myProjects.filter((item) => {
      return item.category === category;
    });
    seAtrr(newArr);
  };
  return (
    <main id="projects" className="flex">
      <section className="flex section-left">
        <button
          onClick={() => {
            setcurrentActive("all");
            seAtrr(myProjects);
          }}
          className={currentActive == "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            buttonHadle("css");
          }}
          className={currentActive == "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            buttonHadle("JS");
          }}
          className={currentActive == "JS" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            buttonHadle("react");
          }}
          className={currentActive == "react" ? "active" : null}
        >
          React & MUI
        </button>
      </section>

      <section className="flex section-right">
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
            layout
            initial={{transform:"scalle(0)"}}
            animate={{transform:"scalle(1)"}}
            transition={{type:"spring",damping:8 , stiffness:50}}
             key={item.img} className=" card">
              <img width={266} src={item.img} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.title}</h1>
                <p className="sub-title">{item.pra}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a href={item.link}>
                      <div className="icon-link"></div>
                    </a>
                    <a href={item.git}>
                      <div className="icon-github"></div>
                    </a>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}</AnimatePresence>
      </section>
    </main>
  );
}
