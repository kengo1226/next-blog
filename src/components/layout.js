import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import { Noto_Sans_JP } from "next/font/google";

const name = 'Aozora BLOG';
export const siteTitle = "サイトタイトル";

const notoSansJP = Noto_Sans_JP({ 
    weight: '400',
    subsets: ["latin"],
    display: 'swap', 
});

export default function Layout({ children }) {
    return(
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="デスクリプションです。"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="header">
                <div className="header-container">
                    <Link href="/">
                        <div className="logo">
                            <Image src={logo} alt="logo" />
                        </div>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/works">Works</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu-btn">
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
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/works">Works</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <p>© 2024 Kengo Iwamoto</p>
            </footer>
        </>
    )
}
