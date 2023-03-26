import styles from "src/components/Items/Items.module.css";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 28, name: "アクション" },
  { id: 12, name: "アドベンチャー" },
  { id: 16, name: "アニメ" },
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

const getCategory = (item) => {
  const ids = item.genre_ids;
  let genreName = [];
  ids.forEach((id) => {
    categories.forEach((genre) => {
      if (id == genre.id) {
        genreName = [...genreName, genre.name];
      }
    });
  });
  return genreName;
};

export const Items = (props) => {
  return (
    <div className={styles.items}>
      {props.moviesData ? (
        props.moviesData.map((item) => {
          return (
            <div className={styles.item} key={item.src}>
              <Link href={"/movies/" + `${item.id}`}>
                <div className={styles.image}>
                  <Image
                    src={"http://image.tmdb.org/t/p/w342" + `${item.poster_path}`}
                    alt={`${item.title}` + "のポスター"}
                    layout="fill"
                  />
                </div>
                <div className={styles.discription}>
                  <p className={styles.title}>{item.title}</p>
                  <div className={styles.subDiscription}>
                    <div className={styles.categories}>
                      {getCategory(item).map((cate) => {
                        return <p className={styles.category}>{cate}</p>;
                      })}
                    </div>
                    <p className={styles.year}>{item.release_date}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <p>データがありません</p>
      )}
    </div>
  );
};
