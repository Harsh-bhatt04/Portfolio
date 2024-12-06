import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';


export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img 
        className={styles.aboutImg}
        src={getImageUrl("about/aboutImage.png")} alt="With Laptop" 
        />

        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img 
                src={getImageUrl("about/cursorIcon.png")} 
                alt="cursor" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>Frontend Developer with experience in creating responsive and user-friendly websites.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img 
                src={getImageUrl("about/serverIcon.png")} 
                alt="backend" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>Backend Developer with experience in creating responsive and user-friendly websites.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img 
                src={getImageUrl("about/uiIcon.png")} 
                alt="cursor" />
                <div className={styles.aboutItemText}>
                    <h3>Full-stack Developer</h3>
                    <p>Frontend Developer with experience in creating responsive and user-friendly websites.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
