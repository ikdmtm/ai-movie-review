import styles from "src/components/Main/Main.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header } from "src/components/Header/Header.jsx";
import { Footer } from "src/components/Footer/Footer.jsx";
import { NavMenu } from "src/components/NavMenu/NavMenu.jsx";
import { Items } from "src/components/Items/Items.jsx";

const categories = [
  { id: 28, name: "アクション" },
  { id: 12, name: "アドベンチャー" },
  { id: 16, name: "アニメーション" },
  { id: 35, name: "コメディ" },
  { id: 80, name: "クライム" },
  { id: 99, name: "ドキュメンタリー" },
  { id: 18, name: "ドラマ" },
  { id: 10751, name: "ファミリー" },
  { id: 14, name: "ファンタジー" },
  { id: 36, name: "歴史" },
  { id: 27, name: "ホラー" },
  { id: 10402, name: "音楽" },
  { id: 9648, name: "ミステリー" },
  { id: 10749, name: "ロマンス" },
  { id: 878, name: "SF" },
  { id: 10770, name: "テレビ映画" },
  { id: 53, name: "スリラー" },
  { id: 10752, name: "戦争" },
  { id: 37, name: "西洋" },
];

export const Main = (props) => {
  console.log("Main", props);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header handleMenu={props.handleMenu} open={props.open} />
      {props.open ? <NavMenu handleMenu={props.handleMenu} categories={categories} /> : null}
      <div>
        <ul className={styles.pcNavMenu}>
          <Link href={"/popular"}>
            <li className={router.route == "/popular" ? styles.pageTitle : null}>最近の人気</li>
          </Link>
          <Link href={"/"}>
            <li className={router.route == "/" ? styles.pageTitle : null}>評価が高い映画</li>
          </Link>
          <Link href={"/now_playing"}>
            <li className={router.route == "/now_playing" ? styles.pageTitle : null}>上映中</li>
          </Link>
          <Link href={"/upcoming"}>
            <li className={router.route == "/upcoming" ? styles.pageTitle : null}>近日公開</li>
          </Link>
        </ul>
      </div>

      <main className={styles.main}>
        <Items moviesData={props.moviesData} categories={categories} />
      </main>
      <Footer />
    </div>
  );
};
