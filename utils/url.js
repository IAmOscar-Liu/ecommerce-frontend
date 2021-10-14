export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_E64448EF60C6AAF5";

export const STRIPE_PK =
  process.NEXT_PUBLIC_STRIPE_PK ||
  "pk_test_51IL7JOI4jBUaJfASlwMwUfIqNP3URdBpzZrHIdcqBnbvh21qbj16HXIHX8kx1Uz7TrcVS4rEMDvivc2wQ7tBsjvB00n6fjGMgu";

/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image
 */
export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
