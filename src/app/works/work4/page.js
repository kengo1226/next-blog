import Image from "next/image";
import styles from "@/styles/works.module.css";
import workImg from "@/public/img/works6.webp";

export const metadata = {
  title: "FAST-Fi公式サイト｜岩本謙吾ポートフォリオ",
};

export default function Work4() {
  return (
    <section className={styles.workDetail}>
      <div className="container-small">
        <h2 className={styles.workTtl}>FAST-Fi公式サイト</h2>
        <div className={styles.workWrapper}>
          <p className={styles.workLink}>
            URL:
            <a href="https://fast-fi.net/new_index.html" target="_blank">
              https://fast-fi.net/new_index.html
            </a>
          </p>
          <div className={styles.workThumb}>
            <Image src={workImg}></Image>
          </div>
          <div className={styles.workContent}>
            <div className={styles.workRow}>
              <p>内容</p>
              <p>実務</p>
            </div>
            <div className={styles.workRow}>
              <p>担当箇所</p>
              <p>コーディング</p>
            </div>
            <div className={styles.workRow}>
              <p>ツール・技術スタック</p>
              <p>HTML / CSS</p>
            </div>
            <div className={styles.workRow}>
              <p>ターゲット</p>
              <p>BtoC</p>
            </div>
            <div className={styles.workRow}>
              <p>制作において</p>
              <p>
                世界150か国以上で使える海外用Wi-Fiの公式サイトの作成
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
