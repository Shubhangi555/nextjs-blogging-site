import { client } from "/lib/sanity";
import Link from "next/link";
import Navbar from "../components/Navbar";
import "../../styles/categories.css"

export const revalidate = 60;

export default async function CategoriesPage() {
  const categories = await client.fetch(`
    *[_type == "category"]{
      title,
      "slug": slug.current
    }
  `);

  return (
    <>
      <Navbar />
      <main className="category-container">
        <h1>All Categories</h1>
        <div className="category-grid">
          {categories.map((cat) => (
            <Link href={`/categories/${cat.slug.current}`} key={cat.slug} className="category-box">
              {cat.title}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
