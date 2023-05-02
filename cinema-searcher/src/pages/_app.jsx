import "src/styles/globals.css";
import { useHandleMenu } from "src/hooks/useHandleMenu";
import { useHandleInput } from "src/hooks/useHandleInput";
import { useState } from "react";

const App = ({ Component, pageProps }) => {
  const handleOpen = useHandleMenu();
  const handleInput = useHandleInput();
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
  return <Component {...pageProps} {...handleOpen} {...handleInput} categories={categories} />;
};

export default App;
