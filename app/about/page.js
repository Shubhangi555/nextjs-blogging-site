import styles from "../../styles/legalPages.module.css";

export default function AboutPage() {
  return (
    <section className={styles.legalPageSection}>
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>MyBlog</strong>! We are passionate about sharing the latest trends, honest product recommendations, and helpful insights to simplify your lifestyle.
      </p>
      <p>
        Our mission is to bring you <strong>authentic content</strong> that’s both useful and easy to understand—whether it’s a beauty product, tech gadget, fashion trend, or home essential.
      </p>
      <p>
        As part of the Amazon Affiliate program, we carefully research and handpick products that we genuinely believe in. If we wouldn’t recommend it to a friend, you won’t see it here.
      </p>
      <p>
        Thank you for being part of our journey!
      </p>
    </div>
    </section>
  );
}
