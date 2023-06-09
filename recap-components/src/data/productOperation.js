import { productArray } from "./products"

export function getAllPruducts() {
  return productArray
}

export function getProduct(slug) {
  return productArray.filter(
    (product) => product.slug === slug
  )
}