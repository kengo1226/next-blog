import { client } from "../../lib/client";
import Layout from "../../components/layout";
import styles from "../../styles/blog.module.css";
import ConvertDate from "@/components/convertdate";


export default function BlogId({ blog }) {
    return (
        <Layout>
            <main>
            <div className={styles.blogHeader}>
                <p>ブログ</p>
            </div>
            <div className={styles.blogContainer}>
                <ConvertDate convertDate={blog.publishedAt}></ConvertDate>
                <span>{blog.category && blog.category.name}</span>
                <h1 className={styles.heading}>{blog.title}</h1>
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