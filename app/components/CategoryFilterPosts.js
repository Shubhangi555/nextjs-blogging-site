"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TabButton from "../UI/TabButton";
import { PortableText } from "next-sanity";


export default function CategoryFilterPosts({ categories, posts }) {

  const [selectedCategory, setSelectedCategory] = useState("all");

  console.log("Selected:", selectedCategory);
  console.log("Post categories:", posts[0]?.categories);

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) =>
        post.categories?.includes(selectedCategory)
      );


  return (
    <section className="category-tabs">
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Explore by Category</h1>

<div className="tab-overflow">
        <div className="tab-buttons" style={{ textAlign: "center" }}>
          <TabButton
            onClick={() => setSelectedCategory("all")}
            className={selectedCategory === "all" ? "active" : ""}
            isSelected={selectedCategory === "all"}
          >
            All
          </TabButton>
          {categories.map((cat) => (
            <TabButton
              key={cat.slug}
              isSelected={selectedCategory === cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={selectedCategory === cat.title ? "active" : ""}
            >
              {cat.title}
            </TabButton>
          ))}
        </div>
        </div>

        <div className="post-grid">
          {filteredPosts.map((post) => (

            <Link  key={post._id}  href={`blog/${post.categories[0]}/${post.slug?.current}`} className="category-box">
              <div className="post" key={post._id}>
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
