import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xldrezqo");

  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            Submit
          </button>

          {state.succeeded && (
            <p className="flex">
              <Lottie
                // loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully👌
            </p>
          )}
        </form>
        <div className="animation"><Lottie
                // loop={false}
                style={{ height: 400 }}
                animationData={contactAnimation}
              /></div>
      </div>
    </section>
  );
}
