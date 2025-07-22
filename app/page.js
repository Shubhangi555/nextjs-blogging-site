import Link from "next/link";
import { client } from "/lib/sanity";
import Navbar from "./components/Navbar";
import Image from "next/image";
import CategoryFilterPosts from "./components/CategoryFilterPosts";
import BannerSlider from "./components/BannerSlider";

export const revalidate = 60;

export default async function HomePage() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "alternativeText": mainImage.alt
    }
  `);

   const categories = await client.fetch(`
    *[_type == "category"]{
      title,
      "slug": slug.current,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "alternativeText": mainImage.alt
    }
  `);

  return (
    <>
      <Navbar />
      <BannerSlider/>
        <CategoryFilterPosts categories={categories} posts={posts}/>
<section>
      <div className="container">
        <header>
          <h1>Recent Blogs</h1>
        </header>
        <div className="post-grid">
          {posts.map((post) => {
            const category = post.categories?.[0]?.toLowerCase().replace(/\s+/g, '-');

            return (
            <div key={post._id} className="post">
              <div className="image-wrapper" key={post._id}>
                <Image
                  src={post.mainImage}
                  alt={post.alternativeText || post.title || "Blog image"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                  </div>
                  <div className="post-info">
                <Link href={`/blog/${category}/${post.slug?.current}`} className="post-title">
                  {post.title}
                </Link>
                <p className="post-date">{new Date(post.publishedAt).toDateString()}</p>
                <p className="post-description">{post.excerpt}</p>
                </div>
                </div>           
            );
          })}
        </div>
      </div>
      </section>
    </>
  );
}
