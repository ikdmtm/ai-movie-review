import styles from "src/components/Items/Items.module.css";
import Image from "next/image";
import Link from "next/link";

const getCategory = (item, categories) => {
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
                      {getCategory(item, props.categories).map((cate) => {
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
