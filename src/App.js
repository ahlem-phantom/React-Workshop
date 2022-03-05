import './App.css';
import Product from './components/Product';
import products from './products.json';
import styled from 'styled-components';
function App() {

  return (
  <AppFrame className="App">
    {products.map((product,index) => (
      <Product product={product} key={index}></Product>
    ))}
  </AppFrame>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;

export default App;
