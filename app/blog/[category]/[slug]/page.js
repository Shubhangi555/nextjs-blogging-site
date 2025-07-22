// app/blog/[category]/[slug]/page.js

import { client } from "/lib/sanity";
import { PortableText } from "@portabletext/react";
import Navbar from "/app/components/Navbar";
import Image from "next/image";

// ✅ ISR enabled here (rebuilds page every 60 seconds)
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current) && count(categories) > 0]{
      "slug": slug.current,
      "category": categories[0]->title
    }
  `);

  return posts.map((post) => ({
    slug: post.slug,
    category: post.category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function BlogPage({ params }) {
  const { slug } =await params;

const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      publishedAt,
      body,
      excerpt,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "alternativeText": mainImage.alt
    }`,
    { slug }
  );

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Navbar />
      <main className="post-container">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-date">{new Date(post.publishedAt).toDateString()}</p>

        <div className="post-body">
          {post.categories.map((cat, index) => (
            <span key={index} className="badge">{cat}</span>
          ))}
          <Image
            src={post.mainImage}
            alt={post.alternativeText || post.title || "Blog image"}
            width={700}
            height={400}  
          />
          <PortableText value={post.body} />
          <h4>Noise {post.title}</h4>
          <p>Price: ₹3,999</p>
        </div>
      </main>
    </>
  );
}
