import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/works.module.css";
import Image from "next/image";
import workImg from "../../../public/img/works3.jpg"
import workDesign from "../../../public/img/work-design-3.jpg"

function work3() {
    return (
        <>
        <Layout>

        <section className={styles.workDetail}>
            <div className="container-small">
                <h2 className={styles.workTtl}>ポートフォリオサイト</h2>
                <div className={styles.workWrapper}>
                    <p className={styles.workLink}>
                        URL: 
                        <a href="https://kengoiwamoto-portfolio.vercel.app/" target='_blank'>https://kengoiwamoto-portfolio.vercel.app/</a>
                    </p>
                    <div className={styles.workThumb}>
                        <Image src={workImg}></Image>
                    </div>
                    <div className={styles.workContent}>
                        <div className={styles.workRow}>
                            <p>内容</p>
                            <p>自主制作</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作期間</p>
                            <p>7日</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ツール・技術スタック</p>
                            <p>Figma / Next.js / module.css / Vercel / microCMS</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ターゲット</p>
                            <p>企業、採用担当者、個人事業主</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作において</p>
                            <p>Next.jsを使用してユーザー体験の向上を図りました。また、JAMstackなポートフォリオにするためにヘッドレスCMSのmicroCMSを導入しています。グローバルナビゲーションなどはすべて日本語にして、ユーザーがより分かりやすいようにしています。</p>
                        </div>
                        <div className={styles.workDesign}>
                            <p>全体図</p>
                            <Image src={workDesign} width={1000} height={2619}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </Layout>
    </>
    )
}

export default work3