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
                Section 1
            </div>
            <ScrollCom>
                <p className={styles.second}>section 2</p>
            </ScrollCom>
            <ScrollCom>
                <p className={styles.third}>section 3</p>
            </ScrollCom>
            <div>
                これが表示されるよ
            </div>
        </div>
    )
}

export default scroll