// app/blog/[category]/[slug]/page.js

import { client } from "/lib/sanity";
import { PortableText } from "@portabletext/react";
import Navbar from "/app/components/Navbar";
import Image from "next/image";
import { RichTextRenderer } from "../../../components/RichTextRenderer";

// ✅ ISR enabled here (rebuilds page every 60 seconds)
export const revalidate = 60;

const components = {
  types: {
    image: ({ value }) => {
      return (
        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <Image
            src={value.asset.url}
            alt={value.alt || "Blog image"}
            width={700}
            height={400}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      );
    },
  },
};

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
    excerpt,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    "alternativeText": mainImage.alt,
    "body": body[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{
          url,
          metadata {
            dimensions,
            lqip
          }
        }
      }
    }
  }`,
  { slug }
);


  if (!post) return <div>Post not found</div>;

  return (
    <>
    
      <section className="post-container" style={{textAlign:"justify"}}>
        <div className="container">
          <div className="post-head">
            {post.categories.map((cat, index) => (
            <span key={index} className="badge">{cat}</span>
          ))}
      
        <p className="post-date">updated on: {new Date(post.publishedAt).toDateString()}</p>
</div>
        <div className="post-body">
          <h1 className="post-title">{post.title}</h1>
          <Image
            src={post.mainImage}
            alt={post.alternativeText || post.title || "Blog image"}
            width={700}
            height={400}  
          />
         
        <RichTextRenderer value={post.body} />
        
        </div>
        </div>
      </section>
    </>
  );
}
