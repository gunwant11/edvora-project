import classes from "./ProductItem.module.scss";
import Image from "next/image";
export default function ProductItem({
  productName,
  brandName,
  price,
  address,
  description,
  date,
  time,
  image,
  
}) {

  
  return (
    <div className={classes.card} >
      <div className={classes.row}>
        <div>
          <Image
            layout="fixed"
            width="80px"
            height="80px"
            src={image}
          />
        </div>
        <div className={classes.box}>
          <div>{productName}</div>
          <p>{brandName}</p>
          <div>$ {price}</div>
        </div>
      </div>
      <div className={classes.row_two}>
        <p>{address.state},<br/>{address.city}</p>
        <p> {date.slice(0,10)} </p>
      </div>
      <div className={classes.description}>
        {description}
      </div>
    </div>
  );
}
