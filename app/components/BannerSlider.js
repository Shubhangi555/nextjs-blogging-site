"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../../styles/BannerSlider.module.css";
import Link from "next/link";


const banners = [
  {
    src: "/images/banner1.jpg",
    alt: "Up to 50% Off on Summer Essentials",
    link: "blog/categories/six",
  },
  {
    src: "/images/banner1.jpg",
    alt: "Discover the Latest Fashion Trends",
    link: "blog/categories/fashion",
  },
  {
    src: "/images/banner1.jpg",
    alt: "Top Electronics Deals of the Week",
    link: "blog/categories/electronics",
  },
];


export default function BannerSlider() {
  return (
    <div className={styles.bannerWrapper}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        loop
        className={styles.bannerSwiper}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                sizes="100vw"
                priority
                style={{ objectFit: "cover" }}
              />
              <Link href={banner.link} className={styles.caption}>
                 {banner.alt}
                </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
