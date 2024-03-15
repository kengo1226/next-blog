import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/works.module.css";
import Image from "next/image";
import workImg4 from "../../../public/img/works4.jpg"
import workDesign from "../../../public/img/work-design-1.jpg"

function work1() {
    return (
        <>
        <Layout>

        <section className={styles.workDetail}>
            <div className="container-small">
                <h2 className={styles.workTtl}>BtoBサービスサイト</h2>
                <div className={styles.workWrapper}>
                    <p className={styles.workLink}>
                        URL: 
                        <a href="https://btob-page.vercel.app/" target='_blank'>https://btob-page.vercel.app/</a>
                    </p>
                    <div className={styles.workThumb}>
                        <Image src={workImg4}></Image>
                    </div>
                    <div className={styles.workContent}>
                        <div className={styles.workRow}>
                            <p>内容</p>
                            <p>自主制作・架空サイト</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作期間</p>
                            <p>3日</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ツール・技術スタック</p>
                            <p>Figma / Next.js / module.css / Vercel</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>ターゲット</p>
                            <p>BtoB企業</p>
                        </div>
                        <div className={styles.workRow}>
                            <p>制作において</p>
                            <p>BtoB企業を想定してサービスサイトを作成しました。「企業名＝サービス名」を想定しているので、コーポレートサイト兼サービスLPのような構成で制作しました。ページを見たときにどのようなサービスなのかを瞬時に伝えられるような構成にしています。</p>
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

export default work1