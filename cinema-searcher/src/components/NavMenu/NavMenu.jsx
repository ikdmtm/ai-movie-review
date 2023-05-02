import styles from "src/components/NavMenu/NavMenu.module.css";
import Image from "next/image";

export const NavMenu = (props) => {
  return (
    <div className={styles.navMenu}>
      <div className={styles.navBg} onClick={props.handleMenu}></div>
      <div className={styles.navItems}>
        <div className={styles.closeButton}>
          <Image
            src="/closeMenu.png"
            alt="Picture of the author"
            width={32}
            height={32}
            className={styles.button}
            onClick={props.handleMenu}
          />
        </div>
        <ul>
          {props.categories.map((category) => (
            <li>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
