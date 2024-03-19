import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/works.module.css";
import Image from "next/image";
import workImg from "../../../public/img/works6.jpg"
import workDesign from "../../../public/img/work-design-4.jpg"

function work3() {
    return (
        <>
        <Layout>

        <section className={styles.workDetail}>
            <div className="container-small">
                <h2 className={styles.workTtl}>架空工務店HP</h2>
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
                            <p>10日</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ツール・技術スタック</p>
                            <p>Figma / HTML / CSS / JavaScript / WordPress構築</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ターゲット</p>
                            <p>企業、顧客</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作において</p>
                            <p>WordPressで架空の工務店のHPを制作しました。ブログ機能、カスタム投稿機能で施工実績を投稿できるようにしました。また、採用情報のテキストは管理画面からも変更できるようにしています。※現在製作途中のため表示が少し崩れる場合がります。</p>
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