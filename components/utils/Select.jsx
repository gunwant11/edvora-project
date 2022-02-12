import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../context";
import classes from "./Select.module.scss";
export default function ({
  optionList,
  listName,
  selectedOption,
  setSelectedOption,
  property,
  pro,
}) {
  const [showDropDown, setShowDropDown] = useState(false);

  const { setDisplayProducts, productData } = useContext(Context);

  const onClickHandler = (e) => {
    setSelectedOption(e.target.textContent);
    let newList;
    if (pro)
      newList = productData.filter(
        (x) => x[property][pro] === e.target.textContent
      );
    else
      newList = productData.filter((x) => x[property] === e.target.textContent);
    setDisplayProducts(newList);
    setShowDropDown(false);
  };
  return (
    <div>
      <div
        className={classes.drop}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div>{selectedOption || listName}</div>
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.09409 9.19L0.816466 0.0488873L11.3717 0.0488864L6.09409 9.19Z"
            fill="#A5A5A5"
          />
        </svg>
      </div>
      <div className={classes.optn}>

      {showDropDown ? (
        optionList.map((item) => <div  onClick={onClickHandler}>{item}</div>)
      ) : (
        <span></span>
      )}
      </div>
    </div>
  );
}
