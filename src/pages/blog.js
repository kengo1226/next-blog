import React from 'react';
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/blog.module.css";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../public/img/about-img.jpg"
import {client} from "../lib/client";
import ConvertDate from "../components/convertdate";

// こっちで全件のデータを取得＆10件ごとのページネーションを実装
export const getStaticProps = async () => {
  const data = await client.get({endpoint: "blog", 
  queries: {offset: 0, limit: 100}});

  return {
    props: {
      blog: data.contents,
    },
  };

}

function blog({blog}) {
  return (
    <>
    <Head>
        <title>ブログ｜岩本謙吾ポートフォリオ</title>
    </Head>
    <Layout>
    <main>
      <div className={styles.blogHeader}>
        <p>ブログ</p>
      </div>
      <section className={styles.blog}>
          <div className={styles.blogWrapper}>
            <div className={styles.blogInner}>
              <ul>
                {blog.map(({id, title, publishedAt, category, eyecatch}) => (
                  <li key={blog.id}>
                    <Link href={`blog/${id}`}>
                    <div className="blogImgWrapper">
                      <img 
                        src={eyecatch.url}
                        alt="eycatch" 
                      />
                    </div>
                      <div className={styles.blogContentRight}>
                        <ConvertDate convertDate={publishedAt}></ConvertDate>
                        <span>{category && category.name}</span>
                        <p>{title}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </section>
    </main>
    </Layout>
    </>
)
}

export default blog