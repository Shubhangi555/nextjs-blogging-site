import Image from "next/image";
import { client } from "/lib/sanity";
import Link from "next/link";
import { PortableText } from "next-sanity";

export const revalidate = 60;
// Optional fallback
export const dynamicParams = true;

export async function generateStaticParams() {
  const categories = await client.fetch(`*[_type == "category"]{ "slug": slug.current }`);
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0]{
      title
    }`,
    { slug }
  );

  const posts = await client.fetch(
    `*[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)]{
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      "mainImage": mainImage.asset->url,
      "alternativeText": mainImage.alt,
      "category": categories[0]->title
    }`,
    { slug }
  );

  return (
    <section>
      <div className="container">
        <h1>Explore <span>{category.title}</span></h1>
        {posts.length === 0 && <p>No posts found.</p>}
        <div className="post-grid">
          {posts.map((post) => (
             <Link href={`/blog/${slug}/${post.slug.current}`} key={post._id}>
            <div  className="post">
              <div className="image-wrapper" key={post._id}>
                <Image
                  src={post.mainImage}
                  alt={post.alternativeText || post.title || "Blog image"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
             
                <div className="post-info">
                  <h3>
                    {post.title}
                  </h3>

                  <p className="post-date">{new Date(post.publishedAt).toDateString()}</p>
                  <div className="post-description">
                    <PortableText value={post.body} />
                  </div>
                </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
