import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/works.module.css";
import Image from "next/image";
import workImg from "../../../public/img/img_bnr.jpg"
import workDesign from "../../../public/img/work-design-4.jpg"

function work3() {
    return (
        <>
        <Layout>

        <section className={styles.workDetail}>
            <div className="container-small">
                <h2 className={styles.workTtl}>バナー作成</h2>
                <div className={styles.workWrapper}>
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
                            <p>1日</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ツール・技術スタック</p>
                            <p>Photoshop</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ターゲット</p>
                            <p>顧客</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作において</p>
                            <p>旅行会社のイベントを想定してバナーを制作しました。「夏旅」を想定して水色とオレンジ系の色を使用しました。</p>
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