import { client } from "@/lib/client";
import styles from "@/styles/blog.module.css";
import ConvertDate from "@/components/convertdate";

// 静的生成のためのパスを指定（旧 getStaticPaths 相当）
export const generateStaticParams = async () => {
  const data = await client.get({ endpoint: "blog" });
  return data.contents.map((content) => ({ id: content.id }));
};

// 記事ごとのメタタイトルを設定
export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const blog = await client.get({ endpoint: "blog", contentId: id });
  return {
    title: `${blog.title}｜岩本謙吾ポートフォリオ`,
  };
};

// データをテンプレートに受け渡す部分の処理（旧 getStaticProps 相当）
export default async function BlogId({ params }) {
  const { id } = await params;
  const blog = await client.get({ endpoint: "blog", contentId: id });

  return (
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
  );
}
