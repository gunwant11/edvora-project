import React, { useState, useContext,useEffect } from "react";
import { Context } from "../../context";
import classes from "./Select.module.scss";
export default function ({ optionList, listName,selectedOption, setSelectedOption,property,pro }) {
  const [showDropDown, setShowDropDown] = useState(false);
 
  const { setDisplayProducts,productData}=useContext(Context)

  const onClickHandler = (e) => {
    setSelectedOption(e.target.textContent)
    let newList;
    if(pro) newList = productData.filter((x)=> x[property][pro] === e.target.textContent)
    else newList = productData.filter((x)=> x[property]=== e.target.textContent)
      setDisplayProducts(newList)
      setShowDropDown(false)
      console.log(newList,selectedOption,pro)
  };

  

  return (
    <div>
      <div
        className={classes.drop}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        {selectedOption || listName}
      </div>
      {showDropDown ? (
        optionList.map((item) => (
          <div onClick={onClickHandler}>{item}</div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
