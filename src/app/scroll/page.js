import styles from "@/styles/scroll.module.css";
import { ScrollCom } from "@/components/ScrollCom";

export default function Scroll() {
  return (
    <div id="section-wrapper">
      <div className={styles.first}>セクション１</div>
      <ScrollCom>
        <p>セクション２</p>
      </ScrollCom>
      <ScrollCom>
        <p>セクション３</p>
      </ScrollCom>
    </div>
  );
}
