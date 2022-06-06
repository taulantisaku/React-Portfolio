import "../Product/Product.scss";
import "../../img/movies-project.png";

export interface ProductType {
  img: string;
  link: string;
}

export const Product = (props: ProductType) => {
  return (
    <div className="Product">
      <div className="Product__browser">
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
