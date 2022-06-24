import "../Product/Product.scss";
import "../../img/movies-project.png";
import { useContext } from "react";
import { ThemeContext } from "../../lib/context/ThemeContext";

export interface ProductType {
  img: string;
  link: string;
}

export const Product = (props: ProductType) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Product">
      <div
        style={{ backgroundColor: darkMode && "#333" }}
        className="Product__browser"
      >
        <div className="Product__circle"></div>
        <div className="Product__circle"></div>
        <div className="Product__circle"></div>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.img} alt="" className="Product__img" />
      </a>
    </div>
  );
};
