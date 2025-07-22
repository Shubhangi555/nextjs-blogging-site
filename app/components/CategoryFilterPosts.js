"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TabButton from "../UI/TabButton";


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
      <h1 style={{textAlign:"center"}}>Explore by Category</h1>

      <div className="tab-buttons" style={{textAlign:"center"}}>
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

      <div className="post-grid">
        {filteredPosts.map((post) => (


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
            <Link href={`blog/${post.categories[0]}/${post.slug?.current}`} className="category-box">
              {post.title}
            </Link>
            <p className="post-date">{new Date(post.publishedAt).toDateString()}</p>
            <p className="post-description">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
