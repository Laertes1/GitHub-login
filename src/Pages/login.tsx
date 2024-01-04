import React from "react";
import Image from "next/image";
import styles from "@/styles/login.module.css";
export default function login() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.boxer1}>
          <Image
            src={"/icon-github.png"}
            width={65}
            height={65}
            alt="Icone Git Hub"
          ></Image>
          <h1 className={styles.title}>Sign in to GitHub</h1>
        </div>

        <form action="#" className={styles.boxerLogin} method="post">
          <span className={styles.emailBoxer}>
            <p className={styles.emailBoxer_Text}>Username or email address</p>
            <input type="email" name="Username or email address" className={styles.inputEmail}/>
          </span>
          <span className={styles.passwordBoxer}>
            <span className={styles.passwordBoxer_boxer}>
            <p className={styles.passwordBoxer_boxer_Text}>Passsword </p>
            <p className={styles.passwordBoxer_boxer_forgotPassword}>Forgot Password?</p>
            </span>
            <input type="password" name="Username or passsword address" className={styles.inputPassword}/>
          </span>
          <span className={styles.boxerButton}>
            <button type="submit" className={styles.buttonSubmit}>Sign in</button>
          </span>
        </form>
        <div className={styles.boxer3}>
          
        </div>
        <div className={styles.footer}></div>
      </section>
    </>
  );
}
