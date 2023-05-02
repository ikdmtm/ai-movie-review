import { useCallback } from "react";

export const useHandlePage = useCallback(() => {
  router.push({
    pathname: `https://api.themoviedb.org/3/movie/top_rated?api_key=54206ad48e363ded4ba03637e6c92d43&language=ja-JP&page=1`,
  });
}, []);
