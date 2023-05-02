import { useCallback, useState } from "react";

export const useHandleMenu = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  return { open, handleMenu };
};
