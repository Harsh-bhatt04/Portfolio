import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer className={styles.container} id='Contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out...</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email-Icon"/>
                <a href="mailto:bharsh487@gmail.com" target='_blank'>bharsh487@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkdin-Icon"/>
                <a href="https://www.linkedin.com/in/harsh-bhatt-617913240" target='_blank'>Linkedin.com/Harsh_Bhatt</a>
            </li>
            
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Linkdin-Icon"/>
                <a href="https://github.com/Harsh-bhatt04" target='_blank'>GitHub.com/Harsh_Bhatt</a>
            </li>
        </ul>
    </footer>
  )
}
