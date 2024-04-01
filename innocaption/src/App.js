import React, { useEffect, useState } from 'react';
import './App.css';
import ProductDisplay from './components/ProductDisplay';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data =>{
      setProducts(data.products);
      console.log(data.products);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>InnoCaption Imaginary E-Commerce Platform</p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {products.map((product, index) => (
          <ProductDisplay key={index} title={product.title} description={product.description} price={product.price}/>
        ))}
      </div>
      </header>
    </div>
  );
}

export default App;
