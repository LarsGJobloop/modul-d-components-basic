import { Navbar } from './components/Navbar/Navbar'
import './App.css'
import './index.css'

const dataList = [
  {
    id: "21453",
    shortDescription: "Hello World",
  },
  {
    id: "4353",
    shortDescription: "Foo Bar",
  },
  {
    id: "536456",
    shortDescription: "Fizz Buzz",
  },
]

function App() {
  return (
    <div className='App'>
      <Navbar />

      <main>
        <h1>Main</h1>

        <section>
          <h1>Listing of data</h1>

          <ul>
            {
              dataList.map(
                (product) => {
                  return (
                    <li>
                      <ProductCard id={product.id} shortDescription={product.shortDescription} />
                    </li>
                  )
                }
              )
            }
          </ul>
        </section>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

function ProductCard(props) {
  const {id, shortDescription} = props

  return (
    <div>
      <h1>{`Product ID: ${id}`}</h1>
      <p>{shortDescription}</p>
    </div>
  )
}


export default App
