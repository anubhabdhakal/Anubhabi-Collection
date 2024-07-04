import { useEffect, useRef } from "react";
export const useClickOutside = (func: () => void) => {
  const ref = useRef();
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      func();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });
  return { ref };
};
