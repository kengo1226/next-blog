import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/scroll.module.css";
import { ScrollCom } from "../components/ScrollCom";

function scroll() {

    // const {ref, inView} = useInView({
    //     rootMargin: '-150px',
    //     triggerOnce: true,
    // });

    return (
        <div id="section-wrapper">
            <div className={styles.first}>
                セクション１
            </div>
            <ScrollCom>
                <p>セクション２</p>
            </ScrollCom>
            <ScrollCom>
                <p>セクション３</p>
            </ScrollCom>
        </div>
    )
}

export default scroll