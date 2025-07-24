import Link from "next/link";
import { client } from "/lib/sanity";
import Navbar from "./components/Navbar";
import Image from "next/image";
import CategoryFilterPosts from "./components/CategoryFilterPosts";
import BannerSlider from "./components/BannerSlider";
import CategorySlider from "./components/CategorySlider";
import { PortableText } from "next-sanity";

export const revalidate = 60;

export default async function HomePage() {
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

      <BannerSlider />

      <section>
        <div className="container">
          <header>
            <h1>Recent Blogs</h1>
          </header>
          <div className="post-grid">
            {posts.map((post) => {
              const category = post.categories?.[0]?.toLowerCase().replace(/\s+/g, '-');

              return (
                <Link href={`/blog/${category}/${post.slug?.current}`} className="post-title" key={post._id}>

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
                      <h3>{post.title}</h3>
                      <p className="post-date">updated on: {new Date(post.publishedAt).toDateString()}</p>

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
      <CategorySlider categories={categories} />
    </>
  );
}
