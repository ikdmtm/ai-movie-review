import styles from "src/components/Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <p>映画検索</p>
      </Link>
      {props.open ? null : (
        <Image
          src="/openMenu.png"
          alt="Picture of the author"
          width={32}
          height={32}
          className={styles.button}
          onClick={props.handleMenu}
        />
      )}
    </header>
  );
};
