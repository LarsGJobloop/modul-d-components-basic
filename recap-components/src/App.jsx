import { ProductCard } from "./components/ProductCard/ProductCard";

import "./App.css";
import "./index.css";
import { FillText } from "./components/FillText/FillText";


const productArray = [
  {
    productName: "MacBook Air 15",
    imageSrc: "https://www.komplett.no/img/p/300/1247226.jpg",
    price: 19490,
  },
  {
    productName: "MacBook Air 14",
    imageSrc: "https://www.komplett.no/img/p/300/1247229.jpg",
    price: 14490,
  }
]


export default function App() {
  return (
    <>
      <header>
        <FillText>
          <h1>Hello Text</h1>
        </FillText>

        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <ProductCard
          productName={productArray[0].productName}
          imageSrc={productArray[0].imageSrc}
          price={productArray[0].price}
        />

        <ProductCard {...productArray[1]}/>
      </main>

      <footer>
        &copy; Lars Gunnar
      </footer>
    </>
  );
}
