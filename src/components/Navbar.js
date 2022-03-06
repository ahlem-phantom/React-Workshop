import React from "react";
import styled from "styled-components";

export default function Header(){
    return (
        <HeaderFrame>
            <ul>
                <li><a href="/">Welcome</a></li>
                <li><a href="/products">Products</a></li>
            </ul>
        </HeaderFrame>
    );
}

const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;