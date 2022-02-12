import React, { useRef, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.scss";

export default function ProductList({ productData }) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Product Name</div>
      <p className={classes.line}></p>
      <div className={classes.rand}>
        <div className={classes.col}>
          {productData.map((data, index) => (
            <ProductItem
              key={index}
              productName={data.product_name}
              brandName={data.brand_name}
              price={data.price}
              address={data.address}
              description={data.discription}
              date={data.date}
              time={data.time}
              image={data.image}
            />
          ))}
        </div>
        <svg
          width="12"
          height="35"
          viewBox="0 0 12 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L11 17.5L1 34"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
