"use client"; //Sayfa Client Side Rendering (CSR) olarak yer alacak.
import styles from "./page.module.css";

export default function Road() {
  console.log(process.env.API_KEY);
  console.log(styles);
  return (
    <div className={`${styles.container} ${styles["container-one"]}`}>Road</div>
  );
}
