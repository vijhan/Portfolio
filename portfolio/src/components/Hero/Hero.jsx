import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Vijhan</h1>
            <p className={styles.description}>I'm a full stack developer with proven experience using React, .Net, NodeJs and other technologies. Reach out if you'd like to learn more!</p>
            <a href="mailto:vijhan.woodley@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
