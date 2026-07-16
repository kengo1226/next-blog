import Image from "next/image";
import styles from "@/styles/works.module.css";
import workImg from "@/public/img/works5.webp";
import workDesign from "@/public/img/work-design-2.jpg";

export const metadata = {
  title: "HISモバイル 端末セット｜岩本謙吾ポートフォリオ",
};

export default function Work2() {
  return (
    <section className={styles.workDetail}>
      <div className="container-small">
        <h2 className={styles.workTtl}>HISモバイル 端末セット</h2>
        <div className={styles.workWrapper}>
          <p className={styles.workLink}>
            URL:
            <a href="https://his-mobile.com/domestic/devices_set" target="_blank">
              https://his-mobile.com/domestic/devices_set
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
              <p>コーディング / 一部デザイン</p>
            </div>
            <div className={styles.workRow}>
              <p>ツール・技術スタック</p>
              <p>Figma / HTML / CSS / PHP / Wordpress / GraphQL</p>
            </div>
            <div className={styles.workRow}>
              <p>ターゲット</p>
              <p>BtoC</p>
            </div>
            <div className={styles.workRow}>
              <p>制作において</p>
              <p>
                掲載する端末やセット商品が定期的に入れ替わるため、社内で運用しているECサイトの情報をそのまま反映できる仕組みが必要という課題がありました。そこで、ECサイト側が提供するGraphQLを使ってデータを取得する仕組みを構築し、WordPress側ではショートコードに商品番号を入力するだけで、担当者がエンジニアを介さずに商品の追加・入れ替えを行えるようにしました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
