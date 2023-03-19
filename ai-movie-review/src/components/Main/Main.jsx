import styles from "src/components/Main/Main.module.css";
import { Header } from "src/components/Header/Header.jsx";
import { Footer } from "src/components/Footer/Footer.jsx";
import { NavMenu } from "src/components/NavMenu/NavMenu.jsx";
import { Items } from "src/components/Items/Items.jsx";

export const Main = (props) => {
  const callApi = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users[0].name);
  };
  const users = callApi();
  console.log(users[0]);
  return (
    <div className={styles.container}>
      <Header handleMenu={props.handleMenu} open={props.open} />
      {props.open ? <NavMenu handleMenu={props.handleMenu} /> : null}
      <div>
        <ul className={styles.pcNavMenu}>
          <li>SF</li>
          <li>アクション</li>
          <li>恋愛</li>
          <li>コメディ</li>
          <li>スリラー</li>
          <li>ホラー</li>
          <li>アニメ</li>
        </ul>
      </div>
      <div className={styles.title}>
        <p>- movie -</p>
      </div>
      <main className={styles.main}>
        <Items />
      </main>
      <Footer />
    </div>
  );
};
