import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import topImg from "../../public/img/top-img.svg";
import { Noto_Sans_JP } from "next/font/google";

const name = 'Aozora BLOG';
export const siteTitle = "岩本謙吾ポートフォリオ";

const notoSansJP = Noto_Sans_JP({ 
    weight: '400',
    subsets: ["latin"],
    display: 'swap', 
});

export default function Layout({ children}) {

    const [active, setActive] = useState(false);

    // ハンバーガーメニュー
    const toggleFunction = () => {
        setActive(!active);
    };

    // スクロールしたらトップボタンを表示する
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        window.scrollY > 570 ? setIsVisible(true) : setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [])

    // トップに戻る
    const backTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return(
        <>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="都内のWEB制作会社でフロントエンドを担当している岩本謙吾です。デザインとコーディングが好きです。"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={`${active ? "show" : ""} ${notoSansJP.className} header`}>
                <div className="header-container">
                    <Link href="/">
                        <div className="logo">
                            <Image src={logo} alt="logo" />
                        </div>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/works">Works</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu-btn" onClick={toggleFunction}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <main className={notoSansJP.className}>
                {children}
            </main>
            <section id="contact">
                <div className="contact-container">
                    <p>Contact</p>
                    <h2>お問い合わせ</h2>
                    <a href="#" className="contact-btn">お問い合わせはこちら</a>
                </div>
            </section>
            <footer className={notoSansJP.className}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/works">Works</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <p>© 2024 Kengo Iwamoto</p>
            </footer>
            <div className={`${isVisible ? "show" : "" } topBtn`} onClick={backTop}>
                <Image src={topImg} />
            </div>
        </>
    )
}
