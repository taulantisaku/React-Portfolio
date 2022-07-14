import { useContext, useState } from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

//style

import "../Contact/Contact.scss";
import { Button, Form, FormGroup, Input, FormFeedback } from "reactstrap";

//media

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Github from "../../img/github.png";
// import Address from "../../img/address.png";
import Facebook from "../../img/facebook.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { ThemeContext } from "../../lib/context/ThemeContext";

const initialState = {
  user_name: "",
  user_subject: "",
  user_email: "",
  message: "",
};

export const Contact = () => {
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const isEnabled =
    formData.user_name.length > 0 &&
    formData.user_email.length > 0 &&
    formData.user_subject.length > 0 &&
    formData.message.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setDone(true);
  };

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

  const canBeSubmitted = () => {
    return isEnabled;
  };
  const handleSubmit = (e: any) => {
    if (!canBeSubmitted()) {
      e.preventDefault();
      return;
    }
    const tempErrors = {
      user_name: "",
      user_subject: "",
      user_email: "",
      message: "",
    };
    const errors = tempErrors;
    setErrors(errors);

    if (!formData.user_name) tempErrors.user_name = "Name is required!";
    if (!formData.user_subject)
      tempErrors.user_subject = "Subject is required!";
    if (!formData.user_email) tempErrors.user_email = "Email is required!";
    if (!formData.message) tempErrors.message = "Message is required!";

    e.preventDefault();
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
          setDone(false);
        }
      );
    if (Object.keys(errors).length !== 0) {
      setDone(false);
      return;
    }

    if (Object.values(errors).length === 0) {
      return;
    }

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
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                value={formData.user_name}
                placeholder="Name"
                qwd
                name="user_name"
                invalid={Boolean(errors.user_name)}
                id=""
                onChange={handleChange}
              />
              <FormFeedback>{errors.user_name}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                value={formData.user_subject}
                placeholder="Subject"
                name="user_subject"
                invalid={Boolean(errors.user_subject)}
                id=""
                onChange={handleChange}
              />
              <FormFeedback>{errors.user_subject}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                value={formData.user_email}
                placeholder="Email"
                invalid={Boolean(errors.user_email)}
                name="user_email"
                id=""
                onChange={handleChange}
              />
              <FormFeedback>{errors.user_email}</FormFeedback>
            </FormGroup>
            <Input
              type="textarea"
              style={{ backgroundColor: darkMode && "#333" }}
              placeholder="Message"
              value={formData.message}
              name="message"
              invalid={Boolean(errors.message)}
              onChange={handleChange}
              rows={10}
            ></Input>
            <FormGroup>
              <Button
                type="submit"
                color="success"
                onClick={notify}
                disabled={!isEnabled}
              >
                Submit
              </Button>
              <ToastContainer />
              {done && (
                <>Thanks for reaching out, I will get back to you asap!</>
              )}
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};
