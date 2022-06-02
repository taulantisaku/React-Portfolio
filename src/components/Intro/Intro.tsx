import React from "react";
import ReactDOM from "react-dom";
import "../Intro/Intro.scss";

export const Intro = () => {
  return (
    <div className="Intro">
      <div className="Intro--left">
        <div className="Intro--leftwrapper">
          <h2 className="Intro__intro">Hello, my name is</h2>
          <h1 className="Intro__name">Taulant Isaku</h1>
        </div>
      </div>
      <div className="Intro--right"> right</div>
    </div>
  );
};
