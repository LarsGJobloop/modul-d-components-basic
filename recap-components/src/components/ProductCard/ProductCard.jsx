import './style.css'

export function ProductCard(props) {
  const { productName, imageSrc, price, className } = props

  return (
    <div className={`ProductCard ${className}`} >
      <img src={imageSrc} alt="" />
      <h1>{productName}</h1>
      <h2>{price}</h2>
    </div>
  );
}