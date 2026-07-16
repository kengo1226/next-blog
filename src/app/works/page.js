import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/works.module.css";
import worksImg from "@/public/img/works-img.jpg";
import workImg3 from "@/public/img/works3.jpg";
import workImg4 from "@/public/img/works4.webp";
import workImg5 from "@/public/img/works5.webp";
import workImg6 from "@/public/img/works6.webp";

export const metadata = {
  title: "制作実績｜岩本謙吾ポートフォリオ",
};

export default function Works() {
  return (
    <>
      <section id="mv" className="sub-mv">
        <div className="main-visual">
          <div className="picture">
            <Image src={worksImg} alt="プロフィールトップ画像" width={1920} height={1200} />
          </div>
          <p className="copy-vertical">
            <span>制作実績</span>
            <br />
            <span>実務から自主製作まで。</span>
            <br />
            <span>コーディングが好き。</span>
          </p>
        </div>
      </section>

      <section className={styles.production}>
        <div className="container-small">
          <h2 className="primary-ttl">
            Works<span>制作実績</span>
          </h2>
          <div className={styles.productionContainer}>
            <div className={styles.work}>
              <div className={styles.workImg}>
                <Link href="works/work1">
                  <Image src={workImg4} />
                </Link>
              </div>
              <div className="work-sub">
                <p className="work-ttl">HISモバイル公式サイト</p>
                <p className="work-desc">
                  WEBサイト制作<span>｜</span>実務
                </p>
              </div>
            </div>
            <div className={styles.work}>
              <div className={styles.workImg}>
                <Link href="works/work2">
                  <Image src={workImg5} />
                </Link>
              </div>
              <div className="work-sub">
                <p className="work-ttl">HISモバイル 端末セット</p>
                <p className="work-desc">
                  WEBサイト制作<span>｜</span>API連携
                </p>
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
                <p className="work-desc">
                  WEBサイト制作<span>｜</span>自主制作
                </p>
              </div>
            </div>
            <div className={styles.work}>
              <div className={styles.workImg}>
                <Link href="works/work4">
                  <Image src={workImg6} />
                </Link>
              </div>
              <div className="work-sub">
                <p className="work-ttl">FAST-Fi公式サイト</p>
                <p className="work-desc">
                  WEBサイト制作<span>｜</span>実務
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
