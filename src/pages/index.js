import React, {useState} from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout"
import { Noto_Sans_JP } from "next/font/google";
import styles from "@/styles/Home.module.css";
import bgTop from "../../public/img/bg-top.jpg"
import personImg from "../../public/img/person-img.jpg"
import workImg1 from "../../public/img/works1.jpg"
import workImg2 from "../../public/img/works2.jpg"
import {client} from "../lib/client";
import ConvertDate from "../components/convertdate";

const notoSansJP = Noto_Sans_JP({ 
  weight: '400',
  subsets: ["latin"],
  display: 'swap', 
});

export const getStaticProps = async () => {
  const data = await client.get({endpoint: "blog", 
  queries: {offset: 0, limit: 5}});

  return {
    props: {
      blog: data.contents,
    },
  };

}

// トップの表示件数
// const [offset, setOffset] = useState(0);
// const perPage = 5;

export default function Home({blog}) {
  return (
    <>
    <Layout>

    <section id="mv">
        <div className="main-visual">
        <div className="picture">
          <Image src={bgTop} alt="トップ画像" />
        </div>
            <p className="copy-vertical">
                <span>岩本謙吾です。</span>
                <br />
                <span>サイト制作承ります。</span>
                <br />
                <span>つながりを作る存在に。</span>
                <br />
                <span>新たなページを一緒に。</span>
            </p>
        </div>
    </section>

    <section id="about">
        <h2 className="primary-ttl fadeIn">About<span>プロフィール</span></h2>
        <div className="about-container">
        <div className="about-picture">
          <Image src={personImg} alt="プロフィール画像" />
        </div>
            <div className="about-content fadeIn">
                <h2>WEBを通じて<br />
                    新たな繋がりを作る。</h2>
                <p>はじめまして、岩本謙吾です。<br />
                    WEB制作との出会いは19歳の頃、ブログでのCSS装飾がきっかけでした。独学でHTML、CSSを学び、その後はセブ島のIT留学でWEBデザインコースを受講しました。IT留学後は都内のWEB制作会社でフロントエンドエンジニアとしてお仕事をしています。コーディングもデザインもどっちも好き。毎日新たなコーディング技術やデザインから刺激を受けながら生活しています。</p>
                <Link href="/about" className="primary-btn">プロフィール</Link>
            </div>
        </div>
    </section>

    <section id="works">
        <h2 className="primary-ttl fadeIn">Works<span>制作実績</span></h2>
        <div className="works-container">
            <div className="work fadeIn">
                <div className="work-img">
                    <Image src={workImg1} />
                </div>
                <div className="work-sub">
                    <p className="work-ttl">台湾観光局WEBサイト</p>
                    <p className="work-desc">WEBサイト制作<span>｜</span>クライアント</p>
                </div>
            </div>
            <div className="work fadeIn">
                <div className="work-img">
                    <Image src={workImg2} />
                </div>
                <div className="work-sub">
                    <p className="work-ttl">タイ観光局WEBサイト</p>
                    <p className="work-desc">WEBサイト制作<span>｜</span>クライアント</p>
                </div>
            </div>
            <div className="work fadeIn">
                <div className="work-img">
                    <Image src={workImg1} />
                </div>
                <div className="work-sub">
                    <p className="work-ttl">台湾観光局WEBサイト</p>
                    <p className="work-desc">WEBサイト制作<span>｜</span>クライアント</p>
                </div>
            </div>
            <div className="work fadeIn">
                <div className="work-img">
                    <Image src={workImg2} />
                </div>
                <div className="work-sub">
                    <p className="work-ttl">タイ観光局WEBサイト</p>
                    <p className="work-desc">WEBサイト制作<span>｜</span>クライアント</p>
                </div>
            </div>
        </div>
        <Link href="/works" className="primary-btn fadeIn">制作実績はこちら</Link>
    </section>

    <section id="blog">
        <h2 className="primary-ttl fadeIn">Blog<span>ブログ</span></h2>
        <div className="blog-container">
          <div>
            <ul>
              {blog.map(({id, title, publishDate, eyecatch}) => (
                <li key={blog.id}>
                  <Link href={`blog/${id}`}>
                  <ConvertDate convertDate={publishDate}></ConvertDate>
                  <p>{title}</p>
                  <img 
                    src={eyecatch.url} 
                    alt="eycatch" 
                  />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </section>

      </Layout>
    </>
  );
}