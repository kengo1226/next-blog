import Image from "next/image";
import styles from "@/styles/about.module.css";
import aboutImg from "@/public/img/about-img.jpg";

export const metadata = {
  title: "プロフィール｜岩本謙吾ポートフォリオ",
};

export default function About() {
  return (
    <>
      <section id="mv" className="sub-mv">
        <div className="main-visual">
          <div className="picture">
            <Image src={aboutImg} alt="プロフィールトップ画像" width={1920} height={1200} />
          </div>
          <p className="copy-vertical">
            <span>私について。</span>
            <br />
            <span>コーディングが好き。</span>
            <br />
            <span>旅とバイクが好き。</span>
          </p>
        </div>
      </section>

      <section className={styles.profile}>
        <div className="container-small">
          <h2 className="primary-ttl fadeIn">
            About<span>プロフィール</span>
          </h2>
          <div className={styles.profileContent}>
            <h3>
              岩本 謙吾<span>KENGO IWAMOTO</span>
            </h3>
            <p>
              はじめまして、岩本謙吾です。
              <br />
              WEB制作との出会いは19歳の頃、ブログでのCSS装飾がきっかけでした。独学でHTML、CSSを学び、その後はセブ島のIT留学でWEBデザインコースを受講しました。IT留学後は都内のWEB制作会社でフロントエンドエンジニアとしてコーディングを担当しました。現在はHIS Mobile株式会社で専任コーダーとして働いています。コーディングもデザインもどっちも好き。毎日新たなコーディング技術やデザインから刺激を受けながら生活しています。
            </p>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceRow}>
              <div className={styles.serviceNumber}>1</div>
              <div className={styles.serviceContent}>
                <h3>コーディング</h3>
                <p>
                  きれいなコーディング、再利用しやすいコーディング、SEOに有利なコーディング、デザインに忠実なコーディングを意識しています。フロントエンドのコーディングがメインですが、PHPやLaravelなどのバックエンドも経験があります。最近はReact、Next.jsを勉強していて、本ポートフォリオもNext.jsを使用しています。
                </p>
              </div>
            </div>
            <div className={styles.serviceRow}>
              <div className={styles.serviceNumber}>2</div>
              <div className={styles.serviceContent}>
                <h3>WordPressを構築</h3>
                <p>
                  WordPressの構築を行っています。ACFなどを使用した既存テーマのカスタマイズからオリジナルテーマの開発まで経験があります。本ポートフォリオはヘッドレスCMSのmicroCMSを利用しています。
                </p>
              </div>
            </div>
            <div className={styles.serviceRow}>
              <div className={styles.serviceNumber}>3</div>
              <div className={styles.serviceContent}>
                <h3>旅とバイクでリフレッシュ</h3>
                <p>
                  ベトナムに数年住んでいた経験があり、今でも長期休みには旅行やバイクでのツーリングに出かけてリフレッシュしています。オンとオフの切り替えを大切にしながら、仕事にも新しい刺激を持ち込むようにしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
