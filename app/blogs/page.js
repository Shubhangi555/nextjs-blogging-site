import { client } from "/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";

export const revalidate = 60;

export default async function BlogsPage() {
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
    <section>
      <div className="container">
        <h1>All Blog Posts</h1>
        <div className="post-grid">
          {posts.map((post) => {
            const category = post.categories?.[0]?.toLowerCase().replace(/\s+/g, '-');

            return (
              <Link href={`/blog/${category}/${post.slug.current}`} key={post._id}>
                <div className="post">
                  <div className="image-wrapper">
                    <Image
                      src={post.mainImage}
                      alt={post.alternativeText || post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="post-info">
                    <h3>{post.title}</h3>
                    <p className="post-date">
                      {new Date(post.publishedAt).toDateString()}
                    </p>
                    <div className="post-description">
                      <PortableText value={post.body} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
