import React from 'react';
import { Link } from "react-router-dom";
import styles from "./about.module.css";


function About() {
    return (
        <div className={styles.contentBox}>
            <div className={styles.aboutDiv}>

                <h2>About PLH</h2>

                <p>Planet’s Little Helper is a project designed for users beginning their journey in leading a more environmentally-friendly life.
                    It’s ideal for those who want to do more, but don’t know where to start and feel a little overwhelmed. </p>
                <p>The app offers personalised and realistic challenges according to the user’s lifestyle and preferences. Encompassing categories
                    of food, travel, recycling and energy, the user can select a challenge to carry out each week. Users are able to view their
                    challenges, and mark them as complete. </p>
                <p>Planet’s Little Helper was built by an interdisciplinary team of six people from the UX, Web Development and Data Science tracks.</p>

                <div className={styles.btnDiv}>
                    <Link to="/challenges">
                        <button className={styles.btnChallenges}>Challenges</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default About