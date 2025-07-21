import Link from "next/link";
import { client } from "/lib/sanity";
import Navbar from "./components/Navbar";
import Image from "next/image";

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

  return (
    <>
      <Navbar />
      <div className="container">
        <header>
          <h1>My Blog</h1>
        </header>
        <div className="post-grid">
          {posts.map((post) => {
            const category = post.categories?.[0]?.toLowerCase().replace(/\s+/g, '-');

            return (
              <div className="post" key={post._id}>
                <Image
                  src={post.mainImage}
                  alt={post.alternativeText || post.title || "Blog image"}
                  width={300}
                  height={200}
                />
                <Link href={`/blog/${category}/${post.slug?.current}`} className="post-title">
                  {post.title}
                </Link>
                <p className="post-date">{new Date(post.publishedAt).toDateString()}</p>
                <p className="post-description">{post.excerpt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
