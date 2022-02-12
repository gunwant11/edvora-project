import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [productData, setProductData] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    const value = {
        productData,
        setProductData,
        displayProducts,
        setDisplayProducts
    };

    return <Context.Provider value = { value } > { props.children } </Context.Provider>

}