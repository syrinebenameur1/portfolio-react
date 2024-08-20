import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Syrine</h1>
        <p className={styles.description}>
        </p>
        <p className={styles.description}>
          I’m actively seeking opportunities in MERN (mongo, express , node ,react) stack or front-end (react) development.
        </p>
        <a href="mailto:syrinebenameuur@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sy.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
