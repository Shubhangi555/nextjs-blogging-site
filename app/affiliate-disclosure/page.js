import styles from "../../styles/legalPages.module.css";

export default function AffiliateDisclosurePage() {
  return (
     <section className={styles.legalPageSection}>
    <div className={styles.container}>
      <h1>Affiliate Disclosure</h1>
      <p>
        This blog contains affiliate links, which means we may earn a small commission if you make a purchase through our links—at no additional cost to you.
      </p>

      <p>
        We are participants in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in or Amazon.com.
      </p>

      <p>
        We only recommend products that we personally use or thoroughly research. Your trust is important to us, and we aim to provide honest opinions, findings, and experiences for each product featured on our blog.
      </p>

      <p>If you have any questions regarding this disclosure or the products mentioned, feel free to contact us.</p>
    </div>
    </section>
  );
}
