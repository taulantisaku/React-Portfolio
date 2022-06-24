import "../toggle/Toggle.scss";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../lib/context/ThemeContext";

export const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="Toggle">
      <img src={Sun} alt="" className="Toggle__Icon" />
      <img src={Moon} alt="" className="Toggle__Icon" />
      <div
        className="Toggle__Button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};
