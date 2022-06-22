import "../toggle/Toggle.scss";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";

export const Toggle = () => {
  return (
    <div className="Toggle">
      <img src={Sun} alt="" className="Toggle__Icon" />
      <img src={Moon} alt="" className="Toggle__Icon" />
      <div className="Toggle__Button"></div>
    </div>
  );
};
