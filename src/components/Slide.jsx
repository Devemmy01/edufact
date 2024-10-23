import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Slide = ({ children, delay = 0, direction = 'up' }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the element comes into view
    threshold: 0.1, // Start the animation when 10% of the element is in view
  });

  const variants = {
    hidden: {
      opacity: 0,
      translateX: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      translateY: direction === 'up' ? 90 : direction === 'down' ? -90 : 0,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        type: "spring",
        duration: 0.5,
        damping: 8,
        stiffness: 100,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
