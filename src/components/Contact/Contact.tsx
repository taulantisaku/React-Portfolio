import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

//style

import "../Contact/Contact.scss";

//media

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Facebook from "../../img/facebook.png";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";

export const Contact = () => {
  // #TODO fix formRef with useRef or useState & functionality of email

  const formRef = document.getElementById("formRef") as HTMLFormElement;
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ca64oz",
        "template_zq9aehk",
        formRef.current,
        "-wjtzhtsVEBcy5GMN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <form id="formRef" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" id="" />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              id=""
            />
            <input type="text" placeholder="Email" name="user_email" id="" />
            <textarea placeholder="Message" name="message" rows={10}></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
