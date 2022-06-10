import "../ProductsList/ProductsList.scss";
import { Product } from "../Product/Product";
import { products } from "../../data";

export interface ProductType {
  img: string;
  link: string;
}

export const ProdutctsList = () => {
  return (
    <div className="ProductsList">
      <div className="ProductsList__texts">
        <h1 className="ProductsList__title">Create & inspire</h1>
        <p className="ProductsList__desc">
          This is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="ProductsList__list">
        {products.map((item: ProductType) => (
          <Product img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};
