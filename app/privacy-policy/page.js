import styles from "../../styles/legalPages.module.css";

export default function PrivacyPolicyPage() {
  return (
     <section className={styles.legalPageSection}>
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our blog.</p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Non-personal data such as browser type, device, and IP address (via analytics)</li>
        <li>Information you voluntarily provide (e.g., through contact forms or newsletter sign-up)</li>
      </ul>

      <h2>Use of Cookies</h2>
      <p>We use cookies to improve your browsing experience and understand how visitors interact with our website.</p>

      <h2>Affiliate Links</h2>
      <p>Some links on our site are affiliate links. We may earn a commission if you click and purchase through them.</p>

      <h2>Third-Party Services</h2>
      <p>We use services like Google Analytics and Amazon Associates. These services may collect information per their own privacy policies.</p>

      <h2>Your Consent</h2>
      <p>By using our website, you consent to our privacy policy.</p>

      <h2>Contact</h2>
      <p>If you have any questions regarding this policy, contact us at myblog@gmail.com.</p>
    </div>
    </section>
  );
}
