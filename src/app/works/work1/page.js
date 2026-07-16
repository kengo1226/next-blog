import Image from "next/image";
import styles from "@/styles/works.module.css";
import workImg4 from "@/public/img/works4.webp";
import workDesign from "@/public/img/work-design-1.jpg";

export const metadata = {
  title: "HISモバイル公式サイト｜岩本謙吾ポートフォリオ",
};

export default function Work1() {
  return (
    <section className={styles.workDetail}>
      <div className="container-small">
        <h2 className={styles.workTtl}>HISモバイル公式サイト</h2>
        <div className={styles.workWrapper}>
          <p className={styles.workLink}>
            URL:
            <a href="https://his-mobile.com/" target="_blank">
              https://his-mobile.com/
            </a>
          </p>
          <div className={styles.workThumb}>
            <Image src={workImg4}></Image>
          </div>
          <div className={styles.workContent}>
            <div className={styles.workRow}>
              <p>内容</p>
              <p>実務</p>
            </div>
            <div className={styles.workRow}>
              <p>担当箇所</p>
              <p>コーディング / 一部デザイン</p>
            </div>
            <div className={styles.workRow}>
              <p>ツール・技術スタック</p>
              <p>Figma / HTML / CSS / PHP / Wordpress</p>
            </div>
            <div className={styles.workRow}>
              <p>ターゲット</p>
              <p>BtoC / BtoB</p>
            </div>
            <div className={styles.workRow}>
              <p>制作において</p>
              <p>
                WordPressでの構築のため、運用担当者が今後も更新しやすいよう、テンプレート化や管理画面の分かりやすさを意識して実装しました。BtoC向けページではキャンペーンページの新規作成や既存ページのブラッシュアップを担当し、BtoB向けページではIoT関連ページの新設に加え、ナビゲーションが分かりにくいという課題があったヘッダーの改修も行い、法人のお客様がより目的のページにたどり着きやすい導線に整えました。そのほか、代理店向けのポータルサイトの構築も担当いたしました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
