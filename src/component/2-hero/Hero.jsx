import "./hero.css";
import Lottie from "lottie-react";
import mainAnimation from "../../../public/animation/main.json";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./me.png" className="avatar" alt="" />
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
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section"><Lottie
                // loop={false}
              
                animationData={mainAnimation}
              /></div>
    </section>
  );
}
