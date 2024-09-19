import styles from "./MobileFooter.module.scss";

export default function MobileFooter() {
  return (
    <footer className={styles.mobileFooter}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#cases">Work</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className={styles.emailWrap}>
        <img src="../../../../img/mobile/mobileFooter/mail.svg" alt="mail" />
        <p>hello@brandboost.com</p>
      </div>
      <div className={styles.phoneWrap}>
        <img src="../../../../img/mobile/mobileFooter/phone.svg" alt="phone" />
        <p>+91 91813 23 2309</p>
      </div>
      <p className={styles.boost}>© 2024 Brand Boost. All rights reserved.</p>
    </footer>
  );
}
