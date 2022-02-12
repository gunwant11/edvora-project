import classes from "./Filter.module.scss";
import Select from "./utils/Select";
import { Context } from "../context";
import { useState, useContext, useEffect } from "react";

export default function Filter() {
  const { productData } = useContext(Context);
  const [product, setProduct] = useState([]);
  const [cityArry, setCity] = useState([]);
  const [stateArry, setState] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedState, setSelectedState] = useState("");


  useEffect(() => {
    const productFilter = productData
      .map((data,i) => data.product_name)
      .filter((value, index, self) => self.indexOf(value) === index);
    const cityFilter = productData
      .map((data,i) => {
        let item = data.address.city;
        return item;
      })
      .filter((value, index, self) => self.indexOf(value) === index);
    const stateFilter = productData
      .map((data,i) => {
        let item = data.address.state;
        return item;
      })
      .filter((value, index, self) => self.indexOf(value) === index);

    setProduct(productFilter);
    setCity(cityFilter);
    setState(stateFilter);
  }, [productData]);

  return (
    <div className={classes.card}>
      <div>Filters</div>
      <p className={classes.line}></p>

      <Select

        optionList={product}
        listName="Product"
        property="product_name"
        selectedOption={selectedProduct}
        setSelectedOption={setSelectedProduct}
        
        
      />
      <Select

        optionList={stateArry}
        listName="State"
        property="address"
        pro="state"
        selectedOption={selectedState}
        setSelectedOption={setSelectedState}
        
      />
      <Select

        optionList={cityArry}
        listName="City"
        property="address"
        pro="city"
        selectedOption={selectedCity}
        setSelectedOption={setSelectedCity}
        
      />
    </div>
  );
}
