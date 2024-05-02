import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (): void => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
};

export default useScrollToTop;
