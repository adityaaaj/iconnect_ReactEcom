
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';



const products = [
  {
    id: 1,
    name: 'Lenovo Ideapad Gaming 3 AMD Ryzen 5 Hexa Core ...',
    image: 'Lenovo Ideapad Gaming 3.jpg',
    price: 49990 // I add price in doller
  },
  {
    id: 2,
    name: 'APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/...',
    image: 'APPLE 2020 Macbook Air M1.jpg',
    price: 81990
  },
  {
    id: 3,
    name: 'Lenovo Core i5 12th Gen - (16 GB/512 GB SSD/W...',
    image: 'Lenovo Core i5 12th Gen.jpg',
    price: 113400
  },
  {
    id: 4,
    name: 'ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/...',
    image: 'ASUS TUF Gaming F15.jpg',
    price: 60990
  }
];

function App() {
  return (
    <div className="App">
      <Navbar/>

      <h1><center>LAPTOPS</center></h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
