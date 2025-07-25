import { client } from "/lib/sanity";
import Link from "next/link";
import Navbar from "../components/Navbar";
import "../../styles/categories.css"
import Image from "next/image";
import CategoryFilterPosts from "../components/CategoryFilterPosts";

export const revalidate = 60;

export default async function CategoriesPage() {
  const categories = await client.fetch(`
    *[_type == "category"]{
      title,
      "slug": slug.current,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "alternativeText": mainImage.alt
    }
  `);

   const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "alternativeText": mainImage.alt
    }
  `);
  return (
    <>
      
      <section className="category-container">
        <CategoryFilterPosts categories={categories} posts={posts}/>
        {/* <h1>All Categories</h1>
        <div className="post-grid">
          {categories.map((cat) => (
            <div className="post" key={cat.slug}>
              <div className="image-wrapper" >
                <Image
                  src={cat.mainImage} 
                  alt={cat.alternativeText || cat.title || "Blog image"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Link href={`/categories/${cat.slug}`} key={cat.slug} className="category-box">
                {cat.title}
              </Link>
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
}
