import React from 'react';
import { Link } from "react-router-dom";
import styles from "./about.module.css";


function About() {
    return (
        <div className={styles.contentBox}>
            <div className={styles.aboutDiv}>
                <h2>About PLH</h2>
                <p>Nice to have you on our journey to have sustainable and positive impact on our environment. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. </p>

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