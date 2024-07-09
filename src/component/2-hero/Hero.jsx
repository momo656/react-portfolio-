import "./hero.css";
import Lottie from "lottie-react";
import mainAnimation from "../../../public/animation/main.json";
export default function Hero() {
  return (
    <section id="hero" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="/me.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Software designer.</h1>
        <p className="sub-title">
          I’m Mohamed Abdelsalm, a software designer . I specialize in crafting
          impactful websites for small and medium-sized businesses. From custom
          designs to responsive e-commerce solutions, I provide tailored
          services to enhance your online presence and drive results.
        </p>

        <div className="all-icons flex">
          <a className="icon " href=""><div className="icon icon-twitter"></div></a>
          <a  className="icon" href=""><div className="icon icon-instagram"></div></a>
          <a  className="icon" href="https://github.com/momo656"><div  className="icon icon-github"></div></a>
          <a  className="icon" href="https://www.linkedin.com/in/mohamed-abdelsalam-982995182/"><div className="icon icon-linkedin"></div></a>
        </div>
      </div>
      <div className="right-section"><Lottie
                // loop={false}
              
                animationData={mainAnimation}
              /></div>
    </section>
  );
}
