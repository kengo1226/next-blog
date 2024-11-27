import React from 'react';
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/about.module.css";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../public/img/about-img.jpg"

function about() {
return (
    <>
    <Head>
        <title>プロフィール｜岩本謙吾ポートフォリオ</title>
    </Head>
    <Layout>
    <section id="mv" className="sub-mv">
        <div className="main-visual">
        <div className="picture">
            <Image 
                src={aboutImg} 
                alt='プロフィールトップ画像'
                width={1920}
                height={1200} 
            />
        </div>
            <p className="copy-vertical">
                <span>私について。</span>
                <br />
                <span>デザインが好き。</span>
                <br />
                <span>コーディングが好き。</span>
            </p>
        </div>
    </section>

    <section className={styles.profile}>
        <div className="container-small">
            <h2 className="primary-ttl fadeIn">About<span>プロフィール</span></h2>
            <div className={styles.profileContent}>
                <h3>岩本 謙吾<span>KENGO IWAMOTO</span></h3>
                <p>はじめまして、岩本謙吾です。<br />
                    WEB制作との出会いは19歳の頃、ブログでのCSS装飾がきっかけでした。独学でHTML、CSSを学び、その後はセブ島のIT留学でWEBデザインコースを受講しました。IT留学後は都内のWEB制作会社でフロントエンドエンジニアとしてお仕事をしています。コーディングもデザインもどっちも好き。最近はPhotoshopやIllustratorでのバナー作成の勉強をしています。</p>
            </div>

            <div className={styles.service}>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>1</div>
                    <div className={styles.serviceContent}>
                        <h3>WEBデザイン</h3>
                        <p>プログラミングスクールのWEBデザインコースを受講し、PhotoshopやAdobe XDのデザインツールを学びました。現在はWEBディレクション業務でXDやFigmaを使ってワイヤーフレームの作成を行っています。</p>
                    </div>
                </div>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>2</div>
                    <div className={styles.serviceContent}>
                        <h3>コーディング</h3>
                        <p>きれいなコーディング、再利用しやすいコーディング、SEOに有利なコーディング、デザインに忠実なコーディングを意識しています。フロントエンドのコーディングがメインですが、PHPやLaravelなどのバックエンドも経験があります。最近はNext.jsを勉強していて、本ポートフォリオもNext.jsを使用しています。</p>
                    </div>
                </div>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>3</div>
                    <div className={styles.serviceContent}>
                        <h3>WordPressを構築</h3>
                        <p>WordPressの構築を行っています。既存テーマのカスタマイズからオリジナルテーマの開発まで経験があります。本ポートフォリオはヘッドレスCMSのmicroCMSを利用しています。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </Layout>
    </>
)
}

export default about