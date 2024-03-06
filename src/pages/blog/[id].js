import { client } from "../../lib/client";
import Layout from "../../components/layout";
import styles from "../../styles/blog.module.css";


export default function BlogId({ blog }) {
    return (
        <Layout>
            <main>
            <div className={styles.blogHeader}>
                <p>ブログ</p>
            </div>
            <div className={styles.blogContainer}>
                <h1 className={styles.heading}>{blog.title}</h1>
                <p>{blog.publishedAt}</p>
                <div className={styles.blogContent}>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: `${blog.body}`,
                        }}
                    />
                </div>
            </div>
            </main>
        </Layout>
    );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};