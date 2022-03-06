import React, {Suspense} from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Navbar";

const Home = React.lazy(() => import("./Home"));
const Products = React.lazy(() => import("./Products"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));  
function App() {
  return (
    <>
    <Header ></Header>
    <AppFrame className="App">
      <BrowserRouter basename="/">
        <Suspense fallback={<p>...Loading page please wait</p>}>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/product/:id" element={<ProductDetails/>}></Route>
          <Route exact render={() => <p>Page not found</p>}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </AppFrame>
    </>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default App;
