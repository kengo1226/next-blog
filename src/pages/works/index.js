import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/works.module.css";
import Image from "next/image";
import worksImg from "../../../public/img/works-img.jpg"
import workImg3 from "../../../public/img/works3.jpg"
import workImg4 from "../../../public/img/works4.jpg"
import workImg5 from "../../../public/img/works5.jpg"
import workImg6 from "../../../public/img/img_bnr.jpg"

function index() {
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
                            <Link href="works/work1">
                                <Image src={workImg4} />
                            </Link>
                        </div>
                        <div className="work-sub">
                            <p className="work-ttl">BtoB WEBサイト</p>
                            <p className="work-desc">WEBサイト制作<span>｜</span>架空サイト</p>
                        </div>
                    </div>
                    <div className={styles.work}>
                        <div className={styles.workImg}>
                            <Link href="works/work2">
                                <Image src={workImg5} />
                            </Link>
                        </div>
                        <div className="work-sub">
                            <p className="work-ttl">企業サイト</p>
                            <p className="work-desc">WEBサイト制作<span>｜</span>クライアント</p>
                        </div>
                    </div>
                    <div className={styles.work}>
                        <div className={styles.workImg}>
                            <Link href="works/work3">
                                <Image src={workImg3} />
                            </Link>
                        </div>
                        <div className="work-sub">
                            <p className="work-ttl">ポートフォリオサイト</p>
                            <p className="work-desc">WEBサイト制作<span>｜</span>自主制作</p>
                        </div>
                    </div>
                    <div className={styles.work}>
                        <div className={styles.workImg}>
                            <Link href="works/work4">
                                <Image src={workImg6} />
                            </Link>
                        </div>
                        <div className="work-sub">
                            <p className="work-ttl">バナー作成</p>
                            <p className="work-desc">Photoshopバナー作成<span>｜</span>自主制作</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </Layout>
    </>
    )
}

export default index