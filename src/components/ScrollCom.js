import React from 'react';
import { useInView } from "react-intersection-observer";
import styles from "../styles/scroll.module.css";

export const ScrollCom = ({ children }) => {

    const {ref, inView} = useInView({
        rootMargin: '-100px',
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={`${styles.scrollWrapper} ${inView ? `${styles.active}` : ""}`}>
            {children}
        </div>
    )
}