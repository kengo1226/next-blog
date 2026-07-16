import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import bgTop from "@/public/img/bg-top.jpg";
import personImg from "@/public/img/about-img-portfolio.jpg";
import workImg3 from "@/public/img/works3.jpg";
import workImg4 from "@/public/img/works4.webp";
import workImg5 from "@/public/img/works5.webp";
import workImg6 from "@/public/img/works6.webp";
import { client } from "@/lib/client";
import ConvertDate from "@/components/convertdate";
import { ScrollCom } from "@/components/ScrollCom";
import WorkCard from "@/components/WorkCard";

export const metadata = {
  title: "トップ｜岩本謙吾ポートフォリオ",
  description:
    "HTMLコーダー/フロントエンドエンジニアの岩本謙吾です。デザインとコーディングが好きです。",
  openGraph: {
    title: "タイトル",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// 実績一覧のデータを定義
const works = [
  { href: "works/work1", image: workImg4, title: "HISモバイル公式サイト", category: "WEBサイト制作", tag: "実務" },
  { href: "works/work2", image: workImg5, title: "HISモバイル 端末セット", category: "WEBサイト制作", tag: "API連携" },
  { href: "works/work3", image: workImg3, title: "ポートフォリオサイト", category: "WEBサイト制作", tag: "自主制作" },
  { href: "works/work4", image: workImg6, title: "FAST-Fi公式サイト", category: "WEBサイト制作", tag: "実務" },
];

export default async function Home() {
  const data = await client.get({
    endpoint: "blog",
    queries: { offset: 0, limit: 5 },
  });
  const blog = data.contents;

  return (
    <>
      <section id="mv">
        <div className="main-visual">
          <div className="picture">
            <Image src={bgTop} alt="トップ画像" width={1920} height={1200} />
          </div>
          <p className="copy-vertical">
            <span>岩本謙吾です。</span>
            <br />
            <span>ウェブ制作を行っています。</span>
            <br />
            <span>フロントをメインにお仕事をしています。</span>
          </p>
        </div>
      </section>

      <section id="about">
        <ScrollCom>
          <h2 className="primary-ttl">
            About<span>プロフィール</span>
          </h2>
        </ScrollCom>
        <div className="about-container">
          <div className="about-picture">
            <ScrollCom>
              <Image src={personImg} alt="プロフィール画像" width={1920} height={1200} />
            </ScrollCom>
          </div>
          <div className="about-content">
            <ScrollCom>
              <h2>
                はじめまして。
                <br />
                岩本謙吾です。
              </h2>
              <p>
                WEB制作との出会いは19歳の頃、ブログでのCSS装飾がきっかけでした。独学でHTML、CSSを学び、その後はセブ島のIT留学でWEBデザインコースを受講しました。IT留学後は都内のWEB制作会社でフロントエンドエンジニアとして独自CMSのコーディングを担当しました。現在はHIS Mobile株式会社で専任コーダーとして働いています。コーディングもデザインもどっちも好き。毎日新たなコーディング技術やデザインから刺激を受けながら生活しています。
              </p>
              <Link href="/about" className="primary-btn">
                プロフィール
              </Link>
            </ScrollCom>
          </div>
        </div>
      </section>

      <section id="works">
        <h2 className="primary-ttl fadeIn">
          Works<span>制作実績</span>
        </h2>
        <div className="works-container">
          {works.map((work) => (
            <WorkCard key={work.href} {...work} />
          ))}
        </div>
        <Link href="/works" className="primary-btn fadeIn">
          制作実績はこちら
        </Link>
      </section>

      <section id="blog">
        <h2 className="primary-ttl fadeIn">
          Blog<span>ブログ</span>
        </h2>
        <div className="blog-container">
          <div className="blog-inner">
            <ul>
              {blog.map(({ id, title, publishedAt, category, eyecatch }) => (
                <li key={id}>
                  <Link href={`blog/${id}`}>
                    <div className="blogImgWrapper">
                      <img src={eyecatch.url} alt="eycatch" />
                    </div>
                    <div className="blog-content-right">
                      <ConvertDate convertDate={publishedAt}></ConvertDate>
                      <span>{category && category.name}</span>
                      <p>{title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/blog" className="primary-btn">
            ブログ一覧
          </Link>
        </div>
      </section>
    </>
  );
}
