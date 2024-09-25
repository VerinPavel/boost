import { useEffect, useState } from "react";
import styles from "./Burger.module.scss";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpenWindow = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsMenuOpen(true);
      }, 10);
    } else {
      setIsMenuOpen(false);
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.burger}>
      {isOpen ? (
        <svg
          onClick={handleOpenWindow}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_124_785)">
            <rect
              x="0.364583"
              y="0.364583"
              width="34.2708"
              height="34.2708"
              rx="17.1354"
              stroke="white"
              strokeOpacity="0.6"
              strokeWidth="0.729167"
            />
            <path
              d="M13.2463 13.2463L21.7537 21.7537"
              stroke="white"
              strokeWidth="1.45833"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.7539 13.2463L13.2465 21.7537"
              stroke="white"
              strokeWidth="1.45833"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_124_785">
              <rect width="35" height="35" rx="17.5" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          onClick={handleOpenWindow}
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="46" height="46" rx="6" fill="#262626" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.25 15.5625C10.25 14.9757 10.7257 14.5 11.3125 14.5H34.6875C35.2743 14.5 35.75 14.9757 35.75 15.5625C35.75 16.1493 35.2743 16.625 34.6875 16.625H11.3125C10.7257 16.625 10.25 16.1493 10.25 15.5625ZM10.25 23C10.25 22.4132 10.7257 21.9375 11.3125 21.9375H34.6875C35.2743 21.9375 35.75 22.4132 35.75 23C35.75 23.5868 35.2743 24.0625 34.6875 24.0625H11.3125C10.7257 24.0625 10.25 23.5868 10.25 23ZM21.9375 30.4375C21.9375 29.8507 22.4132 29.375 23 29.375H34.6875C35.2743 29.375 35.75 29.8507 35.75 30.4375C35.75 31.0243 35.2743 31.5 34.6875 31.5H23C22.4132 31.5 21.9375 31.0243 21.9375 30.4375Z"
            fill="white"
          />
        </svg>
      )}
      {isOpen && (
        <div className={`${isMenuOpen ? styles.open : ""} ${styles.menu} `}>
          <nav>
            <ul className={styles.nav}>
              <li onClick={handleOpenWindow}>
                <a href="#home">HOME</a>
              </li>
              <li onClick={handleOpenWindow}>
                <a href="#services">OUR SERVICES</a>
              </li>
              <li onClick={handleOpenWindow}>
                <a href="#cases">CASES</a>
              </li>
              <li onClick={handleOpenWindow}>
                <a href="#clients">CLIENTS</a>
              </li>
              <li onClick={handleOpenWindow}>
                <a href="#contacts">CONTACTS</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
