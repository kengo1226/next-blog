import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/works.module.css";
import Image from "next/image";
import workImg from "../../../public/img/photoshop.jpg"
import workDesign01 from "../../../public/img/photshop01.jpg"
import workDesign02 from "../../../public/img/photshop02.jpg"
import workDesign03 from "../../../public/img/photshop03.jpg"

function work3() {
    return (
        <>
        <Layout>

        <section className={styles.workDetail}>
            <div className="container-small">
                <h2 className={styles.workTtl}>Photoshop画像作成</h2>
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
                            <p>2日</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ツール・技術スタック</p>
                            <p>Photoshop</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ターゲット</p>
                            <p>-</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作において</p>
                            <p>Photoshopでグラフィックデザインの勉強をしました。いくつかの画像をブレンドしています。</p>
                        </div>
                        <div className={styles.workDesign}>
                            <p>全体図</p>
                            <Image src={workDesign01} width={1000} height={2619}></Image>
                            <Image src={workDesign02} width={1000} height={2619}></Image>
                            <Image src={workDesign03} width={1000} height={2619}></Image>
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