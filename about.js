import React from 'react';
import Layout from "../components/layout";
import styles from "../styles/about.module.css";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../public/img/about-img.jpg"

function about() {
return (
    <>
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
                    WEB制作との出会いは19歳の頃、ブログでのCSS装飾がきっかけでした。独学でHTML、CSSを学び、その後はセブ島のIT留学でWEBデザインコースを受講しました。IT留学後は都内のWEB制作会社でフロントエンドエンジニア兼WEBディレクターとしてお仕事をしています。コーディングもデザインもどっちも好き。デザインもコーディングもどっちも極めたい。最近はバナー制作の勉強をしています。</p>
            </div>

            <div className={styles.service}>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>1</div>
                    <div className={styles.serviceContent}>
                        <h3>WEBデザイン</h3>
                        <p>プログラミングスクールでWEBデザインコースを受講しました。PhotoshopやAdobe XD、Figmaを使ってWEBサイトのデザインを行っています。WEB制作会社ではWEBディレクション業務も兼任しているため、ワイヤーフレーム作成でデザインツールを使っています。</p>
                    </div>
                </div>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>2</div>
                    <div className={styles.serviceContent}>
                        <h3>コーディング</h3>
                        <p>きれいなコーディング、再利用しやすいコーディング、SEOに有利なコーディング、デザインに忠実なコーディングを意識しています。JavaScriptを使ったアニメーションやReact.jsの勉強もしています。本ポートフォリオではNext.jsを使って作成しています。</p>
                    </div>
                </div>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>3</div>
                    <div className={styles.serviceContent}>
                        <h3>WordPress構築</h3>
                        <p>WordPressをメインに構築しています。WordPressは19歳の頃から触れており、既存テーマのカスタマイズやオリジナルテーマの開発を行ってきました。</p>
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