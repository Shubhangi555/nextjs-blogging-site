import { client } from "/lib/sanity";
import Link from "next/link";

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await client.fetch(`*[_type == "category"]{ "slug": slug.current }`);
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const { slug } = params;

  const posts = await client.fetch(
    `*[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)]{
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "mainImage": mainImage.asset->url,
      "alternativeText": mainImage.alt,
      "category": categories[0]->title
    }`,
    { slug }
  );

  return (
    <div className="container">
      <h1>Posts in <q>{slug}</q></h1>
      {posts.length === 0 && <p>No posts found.</p>}
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <Link href={`/blog/${slug}/${post.slug.current}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
