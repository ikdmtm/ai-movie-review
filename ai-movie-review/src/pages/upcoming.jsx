import Head from "next/head";
import { Main } from "src/components/Main/Main.jsx";

const Upcoming = (props) => {
  console.log("index", props);

  return (
    <>
      <Head>
        <title>映画検索</title>
        <meta charset="utf-8" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="http://mplus-fonts.sourceforge.jp/webfonts/general-j/mplus_webfonts.css"
        ></link>
      </Head>
      <Main
        open={props.open}
        handleMenu={props.handleMenu}
        moviesData={props.moviesData}
        text={props.text}
        handleChange={props.handleChange}
        handleClickSearch={props.handleClickSearch}
        categories={props.categories}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const src =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=54206ad48e363ded4ba03637e6c92d43&language=ja-JP&page=1&region=JP";
  try {
    const res = await fetch(src);
    if (!res.ok) {
      throw new Error("Failed to fetch movie data from API");
    }
    const movies = await res.json();
    const moviesData = movies.results || null;

    return {
      props: {
        moviesData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        moviesData: null,
      },
    };
  }
};

export default Upcoming;
