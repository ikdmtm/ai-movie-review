import styles from "src/components/Main/Main.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header } from "src/components/Header/Header.jsx";
import { Footer } from "src/components/Footer/Footer.jsx";
import { NavMenu } from "src/components/NavMenu/NavMenu.jsx";
import { Items } from "src/components/Items/Items.jsx";

export const Main = (props) => {
  console.log("Main", props);
  const router = useRouter();
  console.log("router", router);
  //   const handlePrevClick = ()=>{
  //     router.push({ pathname: "/search", query: { keyword: text } })
  //   }
  return (
    <div className={styles.container}>
      <Header
        handleMenu={props.handleMenu}
        open={props.open}
        text={props.text}
        handleChange={props.handleChange}
        handleClickSearch={props.handleClickSearch}
      />
      {props.open ? <NavMenu handleMenu={props.handleMenu} categories={props.categories} /> : null}
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
        <Items moviesData={props.moviesData} categories={props.categories} />
      </main>
      {/* <div className={styles.page}>
        <span onClick={}>←</span>
        <span>→</span>
      </div> */}
      <Footer />
    </div>
  );
};
