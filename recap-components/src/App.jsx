import { FillText } from "./components/FillText/FillText";
import { ProductCard } from "./components/ProductCard/ProductCard";

import { getAllPruducts } from "./data/productOperation";

import "./App.css";
import "./index.css";

export default function App() {
  const productArray = getAllPruducts();

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
        <ArticleList articles={productArray} />
      </main>

      <footer>&copy; Lars Gunnar</footer>
    </>
  );
}

export function ArticleList(props) {
  // Do logic stuff in top section
  const { articles, className } = props;

  const listOfArticles = articles.map((article) => (
    <li key={article.slug}>
      <ProductCard {...article} />
    </li>
  ));

  // Try to keep return free of JavaScript
  return <ul id="article-container">{listOfArticles}</ul>;
}
