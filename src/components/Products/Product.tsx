import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

interface ProductSchema {
  id: string;
  images: string[];
  description: string;
  title: string;
}

const API_URL: string = "https://dummyjson.com";

const Product: React.FC = () => {
  const [productData, setProductData] = useState<null | ProductSchema[]>(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((res) => setProductData(res.data.products));
  }, []);

  const productItem: JSX.Element[] | undefined = productData
    ?.slice(0, 4)
    .map((product: ProductSchema) => (
      <div key={product.id} className="cart">
        <div className="cart_img">
          <img src={product.images[0]} width={200} alt="" />
        </div>
        <div className="cart_text">
          <h2>{product.description.slice(0, 20)}</h2>
          <p>{product.title.slice(0, 18)}</p>
        </div>
      </div>
    ));

  return <div className="wrapper">{productItem}</div>;
};

export default Product;
