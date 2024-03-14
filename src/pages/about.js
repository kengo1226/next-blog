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
                    WEB制作との出会いは19歳の頃、ブログでのCSS装飾がきっかけでした。独学でHTML、CSSを学び、その後はセブ島のIT留学でWEBデザインコースを受講しました。IT留学後は都内のWEB制作会社でフロントエンドエンジニアとしてお仕事をしています。コーディングもデザインもどっちも好き。デザインもコーディングもどっちも極めたい。<br />最近はGSAPのアニメーションが好きです。このサイトではscrollTriggerを使っています。</p>
            </div>

            <div className={styles.service}>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>1</div>
                    <div className={styles.serviceContent}>
                        <h3>WEBデザイン</h3>
                        <p>企業や個人のオンライン上の顔となるWEBデザインを作っています。次につながるデザイン、新たなつながりを作るデザイン、成果の出るデザインをモットーに作成しています。かっちりしたデザインが好みですが、デザインに偏りが出ないように様々なデザインに触れています。バナー作成も猛烈勉強中。</p>
                    </div>
                </div>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>2</div>
                    <div className={styles.serviceContent}>
                        <h3>コーディング</h3>
                        <p>きれいなコーディング、再利用しやすいコーディング、SEOに有利なコーディング、デザインに忠実なコーディングを意識しています。Javascriptを使用したリッチなアニメーションもお任せください。WEB制作領域においてjQueryのシェアは未だに高いですが、次世代のWEB開発をできるReactも可能です。</p>
                    </div>
                </div>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceNumber}>3</div>
                    <div className={styles.serviceContent}>
                        <h3>CMS構築</h3>
                        <p>CMS構築承ります。WordPressをメインに構築しています。気が付けばWordPressの使用経験は10年近くなっていました。お知らせを更新できるサイトが欲しい、お知らせの他にもブログ投稿のページが欲しいなどご要望に応じてカスタムいたします。WordPressの他にもNext.jsとヘッドレスCMSを使用したJamstackも経験あります。</p>
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