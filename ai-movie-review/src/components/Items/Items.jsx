import styles from "src/components/Items/Items.module.css";
import Image from "next/image";

const ITEMS = [
  { src: "/inseption.jpg", title: "インセプション", category: "SF", year: 2012 },
  { src: "/babydriver.jpg", title: "ベイビードライバー", category: "アクション", year: 2016 },
  { src: "/iamlegend.jpg", title: "アイアムレジェンド", category: "SF", year: 2007 },
  { src: "/mist.jpg", title: "ミスト", category: "ホラー", year: 2000 },
  { src: "/pulpfiction.jpg", title: "パルプフィクション", category: "アクション", year: 1970 },
  { src: "/inseption.jpg", title: "インセプション", category: "SF", year: 2012 },
  { src: "/babydriver.jpg", title: "ベイビードライバー", category: "アクション", year: 2016 },
  { src: "/iamlegend.jpg", title: "アイアムレジェンド", category: "SF", year: 2007 },
  { src: "/mist.jpg", title: "ミスト", category: "ホラー", year: 2000 },
  { src: "/pulpfiction.jpg", title: "パルプフィクション", category: "アクション", year: 1970 },
];

export const Items = () => {
  const categoryColor = (item) => {
    switch (item.category) {
      case "SF":
        return styles.sf;
      case "アクション":
        return styles.action;
      case "ホラー":
        return styles.horror;
      default:
        return "";
    }
  };
  return (
    <div className={styles.items}>
      {ITEMS.map((item) => {
        return (
          <div className={styles.item} key={item.src}>
            {/* <Image src="/inseption.jpg" alt="Picture of the author" width={180} height={240} /> */}
            <div className={styles.image}>
              <Image src={item.src} alt="Picture of the author" layout="fill" />
            </div>
            <div className={styles.discription}>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.subDiscription}>
                <p className={`${styles.category} ${categoryColor(item)}`}>{item.category}</p>
                <p className={styles.year}>{item.year}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
