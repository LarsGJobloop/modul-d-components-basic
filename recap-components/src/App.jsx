import { FillText } from "./components/FillText/FillText";
import { ProductCard } from "./components/ProductCard/ProductCard";

import { getAllPruducts } from "./data/productOperation";

import "./App.css";
import "./index.css";

export default function App() {
  const productArray = getAllPruducts()

  return (
    <>
      <header>
        <FillText>
          <h1>Hello Text</h1>
        </FillText>

        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <ul className="productList">
          {productArray.map((product) => {
            return (
              <li key={product.slug} className="border">
                <ProductCard className="coral" {...product} />
              </li>
            );
          })}
        </ul>
      </main>

      <footer>&copy; Lars Gunnar</footer>
    </>
  );
}
