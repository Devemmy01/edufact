import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScrollAnim = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetY2, setOffsetY2] = useState(0);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const handleScroll = () => {
    const maxScroll = 3000;
    const maxScroll2 = 2000;
    const scrollY = window.pageYOffset;
    setOffsetY(scrollY > maxScroll ? maxScroll : scrollY);
    setOffsetY2(scrollY > maxScroll2 ? maxScroll2 : scrollY);
  };

  const getTransformSpeed = () => {
    if (window.innerWidth <= 768) {
      return 1.5;
    }
    return 3.77;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    setOffsetY(window.pageYOffset);
    setOffsetY2(window.pageYOffset);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { offsetY, offsetY2, ref, controls, getTransformSpeed };
};

export default useScrollAnim;