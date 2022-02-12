import React,{useRef} from "react";
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.scss";
import HorizontalScroll from 'react-scroll-horizontal'

export default function ProductList({ productData }) {

  const scrollref = useRef();
  const child   = { width: `18rem`, height: `100%`}
  const move = (e) =>{
    console.log(e)
  }


  return (
    <div className={classes.container}>
      <div className={classes.title}>Product Name</div>
      <p className={classes.line}></p>
      <div className={classes.col} onScroll={move} ref={scrollref} >
        <HorizontalScroll
        reverseScroll={true}
        style={{ width: `80rem`, height: `15rem` }}
        >
          {productData.map((data, index) => (
            <ProductItem
              styles={child}
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
        </HorizontalScroll>
      </div>
    </div>
  );
}
