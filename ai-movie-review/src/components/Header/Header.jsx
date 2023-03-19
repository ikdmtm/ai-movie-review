import styles from "src/components/Header/Header.module.css";
import Image from "next/image";

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <p>AI映画レビュー</p>
      {props.open ? (
        <Image
          src="/closeMenu.png"
          alt="Picture of the author"
          width={32}
          height={32}
          className={styles.button}
          onClick={props.handleMenu}
        />
      ) : (
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
