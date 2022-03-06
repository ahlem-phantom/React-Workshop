import React, { useEffect, useState } from"react";
import styled from "styled-components";

export default function Product(props) {
    const [product, setProduct] = useState(props.product);
    const [updated, setUpdated] = useState(0);
    useEffect(() => { 
        console.log(
        "I have finished rendering" + 
        props.product.name+
        " price: "+
        props.product.price
    );
    return () => {
        console.log("I'm being destroyed");
        };
    });

    const addLike = () => {
       setProduct({
       ...product,
       likes: Number(product.likes) +1,
       });
       setUpdated((u) => u + 1);
    };

    useEffect(() => {
        console.log(updated);
    }, [updated]);
    return(
        product.likes >= 5 ? (
<ProductFrameBest>
    <ProductImageWrapperBest>
         <ProductImageBest src={product.img}></ProductImageBest>
    </ProductImageWrapperBest>

    <ProductInfoWrapperBest>
    <span>Best Product</span>
    <span>
        <a href={"/product/" + product.id}>{product.name}</a>
    </span>
    <span>{product.price}</span>
    <span>Likes : {product.likes}</span>
    <button onClick={addLike}>Like</button>
    </ProductInfoWrapperBest>
</ProductFrameBest> 
):(
<ProductFrame>
    <ProductImageWrapper>
        <ProductImage src={product.img}></ProductImage>
    </ProductImageWrapper>
    
    <ProductInfoWrapper>
    <span>Best Product</span>
        <span>
        <a href={"/product/" + product.id}>{product.name}</a>
        </span>
        <span>{product.price}</span>
        <span>Likes : {product.likes}</span>
        <Button onClick={addLike}>Like</Button>
    </ProductInfoWrapper>
</ProductFrame> 
)
);
}
    const ProductFrame = styled.div`
    border-radius: 25px;
    min-height: 200px;
    min-width: 200px;
    background-color: rgb(110, 110, 110, 0.7);
    margin: 10px;
    display: flex;
    flex-direction: column;
    
    `;
    const ProductImageWrapper = styled.div`
    margin: 5px;
    max-width: 200px;
    `;
    const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    `;
    const ProductInfoWrapper = styled.div`
    margin-top: auto;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    & > span {
        text-align: center;
    }
    `;
    const ProductFrameBest = styled.div`
    border-radius: 25px;
    min-height: 200px;
    min-width: 200px;
    background-color: #DB7093;
    margin: 10px;
    display: flex;
    flex-direction: column;
    animation:  clignote 2s linear infinite;
    @keyframes clignote {  
    50% { opacity: 0.5; }
    }
    `;
    const ProductImageWrapperBest = styled.div`
    margin: 5px;
    max-width: 200px;
    `;
    const ProductImageBest = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    `;
    const ProductInfoWrapperBest = styled.div`
    color:white;
    margin-top: auto;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    & > span {
        text-align: center;
    }
    `;
    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;