"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import "../../styles/CategorySlider.css"


export default function CategorySlider({ categories }) {
  return (
    <div className="marquee-slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        loop={true}
        allowTouchMove={true}
        grabCursor={true}
        className="marquee-slider"
      >
        {categories.concat(categories).map((cat, index) => (
          <SwiperSlide key={`${cat.slug}-${index}`} style={{ width: "250px" }}>
            <Link
              href={`/categories/${cat.slug}`}
              className="category-box"
            >
              <div className="post">
                <div className="image-wrapper">
                  <Image
                    src={cat.mainImage}
                    alt={cat.alternativeText || cat.title || "Blog image"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p>{cat.title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
}
