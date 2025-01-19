/* eslint-disable react/prop-types */
//
const ProductList = ({ product }) => {
  console.log(product)
  const { title, images, price, stock } = product;
  return (
    <div className="product-card">
      <img src={images[0]} alt={title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
        <p className="">{stock}</p>
        {/* <p className="product-description">{description}</p> */}
      </div>
    </div>
  );
};


export default ProductList