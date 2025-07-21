// components/ProductGrid.js
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ProductCard.module.css';
import { getProducts } from '/lib/sanity'

export default async function ProductGrid() {
      const products = await getProducts()
  return (
    <section id="products">
      {products.map((product) => (
        <div key={product._id} >
          <img
            src={product.imageUrl}
            alt={product.title}
            width={400}
            height={250}
          />
          <div>
            <h3>{product.title}</h3>
            <p>{product.description.slice(0, 80)}...</p>
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
