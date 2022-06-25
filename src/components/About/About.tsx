import "./About.scss";
import Me from "../../img/me-coding.jpeg";
import Award from "../../img/javascript-beetroot.jpg";

export const About = () => {
  return (
    <div className="About">
      <div className="About__left">
        <div className="About__cardbg"></div>
        <div className="About__card">
          <img src={Me} alt="" className="About__img" />
        </div>
      </div>
      <div className="About__right">
        <h1 className="About__title">About Me</h1>
        <p className="About__sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="About__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="About__award">
          <a
            href="https://lms.xk.beetroot.academy/diploma/ckpmq7kitrjy10791mmm5hsu3"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Award} alt="" className="About__award__img" />
          </a>
          <div className="About__award__texts">
            <h4 className="About__award__title">
              Advanced JavaScript & ReactJS
            </h4>
            <p className="About__award__desc">
              Successfully completed the Advanced JavaScript & ReactJS course
              during September - November 2021 and awarded as Junior aswell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
