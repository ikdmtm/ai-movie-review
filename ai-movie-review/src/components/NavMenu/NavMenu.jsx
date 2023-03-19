import styles from "src/components/NavMenu/NavMenu.module.css";

export const NavMenu = (props) => {
  return (
    <div className={styles.navMenu}>
      <div className={styles.navBg} onClick={props.handleMenu}></div>
      <ul className={styles.navItems}>
        <li>- カテゴリー -</li>
        <li>SF</li>
        <li>アクション</li>
        <li>恋愛</li>
        <li>コメディ</li>
        <li>スリラー</li>
        <li>ホラー</li>
        <li>アニメ</li>
      </ul>
    </div>
  );
};
