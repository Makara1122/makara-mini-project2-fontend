"use client";

import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { isKeyObject } from "util/types";

export default function CardProduct() {
  type ProductProp = {
    image: string;
    price: number;
    name: string;
    id : number;
  };

  const [products, setProduct] = useState<ProductProp[]>([]);
  const url = "https://sokea.online/api/products/?page=1&page_size=12";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data.results));
  }, []);

  return (
    <div className="grid grid-cols-1 
    sm:grid-cols-2
    md:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-4 gap-1 m-auto mt-20 ">
      {products.map((product, index) => (
        <CardComponent
          key={index} 
          onClick={`/service/${product.id}`}
          image={product.image}
          price={product.price}
          description={product.name}
        />
      ))}
    </div>
  );
}
