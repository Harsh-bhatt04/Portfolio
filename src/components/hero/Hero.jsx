import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 
                className={styles.title}
                >
                Hello, I'm  Harsh
                </h1>
                <p className={styles.desc}>I am a student with keen interest in Coding and Full stack Developement. React out if you wanted to know more about me...</p>
                
                <a 
                className={styles.contactBtn} href="mailto:bharsh487@gmail.com"
                >
                Contact me 
                </a>
               
            </div>
            <img 
            className={styles.heroImg} 
            src={getImageUrl("hero/30582.jpg")} alt="My-image" 
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
