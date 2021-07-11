import React from 'react'
import { Link } from "react-router-dom";
import styles from "./footer.module.css";


function Footer() {
    return (
        <div className={styles.footbar}>
            <div className={styles.h2Div}>
                <h2 className={styles.h2}>
                    <span> &#169; </span>
                    Planet’s Little Helper
                </h2>
            </div>
            <div className={styles.aboutDiv}>
                <button className={styles.aboutBtn}>
                    <Link to="/about" className={styles.about}>About</Link>
                </button>
            </div>
        </div>
    )
}

export default Footer
