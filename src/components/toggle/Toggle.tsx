import "../toggle/Toggle.scss";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../lib/context/ThemeContext";
import SwitchOff from "../../audio/lightswitch-off.mp3";
import SwitchOn from "../../audio/lightswitch-on.mp3";

//lib
import { Howl } from "howler";

export const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
    darkMode ? SoundPlay(SwitchOff) : SoundPlay(SwitchOn);
  };

  const SoundPlay = (src: any) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
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
