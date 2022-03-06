import React from "react";
import styled from "styled-components";
import products from "./products.json";
import Product from "./components/Product";

export default function Products(){
  return(
  <ProductsWrapper>{
      products.map((product,index) => (
          <Product product={product} key={index}></Product>
      ))
      } </ProductsWrapper>
  );

}

const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;
