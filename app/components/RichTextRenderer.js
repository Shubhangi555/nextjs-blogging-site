// components/RichTextRenderer.js
"use client";

import { PortableText } from "next-sanity";

export const RichTextRenderer = ({ value }) => {
  const components = {
    types: {
      image: ({ value }) => (
        <img
          src={value.asset?.url}
          alt={value.alt || "Image"}
          className="pt-image"
        />
      ),
    },
    block: {
      h1: ({ children }) => <h1 className="pt-h1">{children}</h1>,
      h2: ({ children }) => <h2 className="pt-h2">{children}</h2>,
      h3: ({ children }) => <h3 className="pt-h3">{children}</h3>,
      normal: ({ children }) => <p className="pt-paragraph">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="pt-ul">{children}</ul>,
      number: ({ children }) => <ol className="pt-ol">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="pt-li">{children}</li>,
      number: ({ children }) => <li className="pt-li">{children}</li>,
    },
    marks: {
      link: ({ children, value }) => (
        <a
          href={value.href}
          className="pt-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return <PortableText value={value} components={components} />;
};
