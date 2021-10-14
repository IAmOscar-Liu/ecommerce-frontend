import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { fromImageToUrl, API_URL } from "../utils/url";
import { twoDeicimals } from "../utils/format";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map((product) => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(product.image)} alt="" />
                </div>
                <div className={styles.product__Col}>
                  {product.name} ${twoDeicimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // Fetch the products
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();

  // Return the products as props
  return {
    props: {
      products
    }
  };
}
