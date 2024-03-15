import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/works.module.css";
import Image from "next/image";
import workImg from "../../../public/img/works5.jpg"
import workDesign from "../../../public/img/work-design-2.jpg"

function work2() {
    return (
        <>
        <Layout>

        <section className={styles.workDetail}>
            <div className="container-small">
                <h2 className={styles.workTtl}>株式会社トライブレイトHP</h2>
                <div className={styles.workWrapper}>
                    <p className={styles.workLink}>
                        URL: 
                        <a href="http://tribelate.co.jp/" target='_blank'>http://tribelate.co.jp/</a>
                    </p>
                    <div className={styles.workThumb}>
                        <Image src={workImg}></Image>
                    </div>
                    <div className={styles.workContent}>
                        <div className={styles.workRow}>
                            <p>内容</p>
                            <p>クライアントワーク</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作期間</p>
                            <p>1カ月</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ツール・技術スタック</p>
                            <p>Adobe XD / HTML / CSS / JavaScript / WordPress構築</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ターゲット</p>
                            <p>企業、事業内容のイベントに参加する皆様</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作において</p>
                            <p>スポーツや健康を事業内容としていることから、健全で信頼さを感じられるように青色を使用し、サイト構成もシンプルな設計にしました。また、今後ブログ機能も使えるようにWordpress化をしています。</p>
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

export default work2