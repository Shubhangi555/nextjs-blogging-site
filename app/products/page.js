// app/products/page.jsx (or wherever you want to display)
import { getProducts } from '/lib/sanity'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img src={product.imageUrl} alt={product.title} className="product-image" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="price-rating">
            <span>{product.price}</span>
            <span>{product.rating}</span>
          </div>
          <a href={product.affiliateLink} target="_blank" rel="noreferrer" className="buy-button">
            Buy Now →
          </a>
        </div>
      ))}
    </div>
  )
}
