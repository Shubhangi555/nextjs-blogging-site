import { createClient } from "@sanity/client";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-07-14";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

console.log("Sanity Config:", { projectId, dataset, apiVersion });

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  
});


export const getProducts = async () => {
  return client.fetch(`*[_type == "product"]{
    _id,
    title,
    description,
    price,
    rating,
    "imageUrl": image.asset->url,
    affiliateLink
  }`)
}


