import React, { useEffect } from 'react';
import { HiArrowLongDown } from "react-icons/hi2";
import styles from "./ScrollBtn.module.scss";

function ScrollBtn() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    useEffect(() => {
        const text = document.querySelector(`.${styles.text} p`);
        text.innerHTML = text.innerText.split("").map(
          (char, i) =>
            `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
        ).join('');
      }, []);

  return (
    <>
    <div className={styles.circle} onClick={() => handleScroll('testimonials')}>
        <div className={styles.text}>
            <p>SCROLL DOWN - SCROLL DOWN - </p>
        </div>
        <div className={styles.innercircle}>
            <HiArrowLongDown className={styles.arrow} size={30}/>
        </div>
    </div>

    </>
  )
}

export default ScrollBtn