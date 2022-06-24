import { useContext, useState } from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

//style

import "../Contact/Contact.scss";

//media

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Github from "../../img/github.png";
import Address from "../../img/address.png";
import Facebook from "../../img/facebook.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { ThemeContext } from "../../lib/context/ThemeContext";

export const Contact = () => {
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const notify = () =>
    toast.success("Your message was sent successfuly!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //#TODO form validation if empty
    emailjs
      .sendForm(
        "service_0ca64oz",
        "template_zq9aehk",
        e.target,
        "-wjtzhtsVEBcy5GMN"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          setDone(true);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="Contact">
      <div className="Contact__bg"></div>
      <div className="Contact__wrapper">
        <div className="Contact__left">
          <h1 className="Contact__title">Reach me out</h1>
          <div className="Contact__info">
            <div className="Contact__info__item">
              <img src={Phone} alt="phone" className="Contact__icon" />
              +383 44 133 364
            </div>
            <div className="Contact__info__item">
              <img className="Contact__icon" src={Email} alt="Email" />
              taulant.isaku1@gmail.com
            </div>
            <div className="Contact__info__item">
              <img className="Contact__icon" src={Linkedin} alt="Linkedin" />
              Taulant Isaku
            </div>
            <div className="Contact__info__item">
              <img className="Contact__icon" src={Github} alt="Github" />
              Taulant Isaku
            </div>
            <div className="Contact__info__item">
              <img className="Contact__icon" src={Facebook} alt="Facebook" />
              Taulant Isaku
            </div>
            <div className="Contact__info__item">
              <img className="Contact__icon" src={Instagram} alt="Instagram" />
              Taulant Isaku
            </div>
          </div>
        </div>
        <div className="Contact__right">
          <p className="Contact__desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              id=""
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              id=""
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
              id=""
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              placeholder="Message"
              name="message"
              rows={10}
            ></textarea>
            <button onClick={notify}>Submit</button>
            <ToastContainer />
            {done && <>Thanks for reaching out, I will get back to you asap!</>}
          </form>
        </div>
      </div>
    </div>
  );
};
