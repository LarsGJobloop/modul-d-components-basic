export function ProductCard(props) {
  console.log(props)

  const { productName, imageSrc, price } = props

  

  return (
    <div>
      <img src={imageSrc} alt="" />
      <h1>{productName}</h1>
      <h2>{price}</h2>
    </div>
  );
}