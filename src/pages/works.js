import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/works.module.css";
import Image from "next/image";
import worksImg from "../../public/img/works-img.jpg"
import workImg1 from "../../public/img/works1.jpg"
import workImg2 from "../../public/img/works2.jpg"
import workImg3 from "../../public/img/works3.jpg"
import workImg4 from "../../public/img/works4.jpg"
import workImg5 from "../../public/img/works5.jpg"

function works() {
return (
    <>
    <Layout>

    <section id="mv" class="sub-mv">
        <div class="main-visual">
        <div className="picture">
            <Image 
                src={worksImg} 
                alt='プロフィールトップ画像'
                width={1920}
                height={1200} 
            />
        </div>
            <p class="copy-vertical">
                <span>私について。</span>
                <br />
                <span>デザインが好き。</span>
                <br />
                <span>コーディングが好き。</span>
            </p>
        </div>
    </section>

    <section className={styles.production}>
        <div className="container-small">
            <h2 className="primary-ttl">Works<span>制作実績</span></h2>
            <div className={styles.productionContainer}>
                <div className={styles.work}>
                    <div className={styles.workImg}>
                        <Image src={workImg4} />
                    </div>
                    <div className="work-sub">
                        <p className="work-ttl">BtoB WEBサイト</p>
                        <p className="work-desc">WEBサイト制作<span>｜</span>架空サイト</p>
                    </div>
                </div>
                <div className={styles.work}>
                    <div className={styles.workImg}>
                        <Image src={workImg5} />
                    </div>
                    <div className="work-sub">
                        <p className="work-ttl">企業サイト</p>
                        <p className="work-desc">WEBサイト制作<span>｜</span>クライアント</p>
                    </div>
                </div>
                <div className={styles.work}>
                    <div className={styles.workImg}>
                        <Image src={workImg3} />
                    </div>
                    <div className="work-sub">
                        <p className="work-ttl">ポートフォリオサイト</p>
                        <p className="work-desc">WEBサイト制作<span>｜</span>自主制作</p>
                    </div>
                </div>
                <div className={styles.work}>
                    <div className={styles.workImg}>
                        <Image src={workImg2} />
                    </div>
                    <div className="work-sub">
                        <p className="work-ttl">タイ観光局WEBサイト</p>
                        <p className="work-desc">WEBサイト制作<span>｜</span>クライアント</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </Layout>
    </>
)
}

export default works