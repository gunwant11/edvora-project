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

  const filter = (property, property2) => {
    if (property2) {
      const array = productData
        .map((data, i) => data[property][property2])
        .filter((value, index, self) => self.indexOf(value) === index);
      return array;
    }
    const array = productData
      .map((data, i) => data[property])
      .filter((value, index, self) => self.indexOf(value) === index);
    return array;
  };

  useEffect(() => {
    const productFilter = filter("product_name");
    const cityFilter = filter("address", "city");
    const stateFilter = filter("address", "state");

    setProduct(productFilter);
    setCity(cityFilter);
    setState(stateFilter);
  }, [productData]);

  return (
    <div className={classes.card}>
      <div>Filters</div>
      <p className={classes.line}></p>

      <Select
        key={1}
        optionList={product}
        listName="Product"
        property="product_name"
        selectedOption={selectedProduct}
        setSelectedOption={setSelectedProduct}
      />
      <Select
        key={2}
        optionList={stateArry}
        listName="State"
        property="address"
        pro="state"
        selectedOption={selectedState}
        setSelectedOption={setSelectedState}
      />
      <Select
        key={3}
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
