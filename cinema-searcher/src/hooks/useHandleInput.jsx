import { useCallback, useState } from "react";
import { useRouter } from "next/router";

export const useHandleInput = () => {
  const router = useRouter();
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  console.log("text2", text);

  const handleClickSearch = useCallback(() => {
    router.push({ pathname: "/search", query: { keyword: text } });
  }, [text]);

  return { text, handleChange, handleClickSearch };
};
