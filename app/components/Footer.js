"use client";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <h2>MyBlog</h2>
                        <p>Sharing stories, tutorials, and ideas.</p>
                    </div>

                    <div className={styles.footerLinks}>
                        <Link href="/about">About Us</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>

                        <div className={styles.socialIcons}>
                            {/* Add Pinterest */}
                            <a
                                href="https://www.pinterest.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Pinterest"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#E60023"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className={styles.icon}
                                >
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 4.93 3.58 9.1 8.44 10.07-.12-.85-.23-2.15.05-3.07.25-.84 1.64-5.33 1.64-5.33s-.42-.85-.42-2.1c0-1.96 1.14-3.43 2.57-3.43 1.21 0 1.79.91 1.79 2 0 1.21-.77 3.02-1.17 4.7-.33 1.38.7 2.51 2.06 2.51 2.47 0 4.13-3.16 4.13-6.91 0-2.85-1.92-4.98-5.41-4.98-3.94 0-6.41 2.95-6.41 6.23 0 1.14.44 2.36.99 3.02.11.13.13.25.1.39-.11.43-.36 1.38-.41 1.57-.06.25-.21.31-.49.19-1.84-.85-2.99-3.5-2.99-5.63 0-4.58 3.33-8.8 9.6-8.8 5.04 0 8.97 3.6 8.97 8.4 0 5-3.15 9.01-7.53 9.01-1.47 0-2.85-.76-3.32-1.65l-.91 3.48c-.33 1.29-1.23 2.9-1.83 3.89C10.96 23.93 11.48 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
