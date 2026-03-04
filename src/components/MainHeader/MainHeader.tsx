import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";

import logoImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground/>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="logo" loading="eager" />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Comminity</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
