import React,{useRef, useState,useEffect} from "react";
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.scss";


export default function ProductList({ productData }) {
  const [scroll, setScroll] = useState()
  const [node, setNode] = useState()

  const scrollref = useRef(0);
  const Containeref = useRef(0);
  const child   = { width: `18rem`, height: `100%`}
  const move = (e) =>{
    
    
  }
useEffect(()=>{
  setScroll(scrollref.current)
  setNode(Containeref.current)
    
})

  return (
    <div className={classes.container}>
      <div className={classes.title}>Product Name</div>
      <p className={classes.line}></p>
      <div>

      <div className={classes.col} onScroll={move} ref={Containeref} >
        
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
          
      </div>

      </div>
    </div>
  );
}

