import { useState } from "react";
import logoo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import cross from "../assets/cross.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about_us" },
  { title: "Partners", path: "/our_partners" },
  { title: "Team", path: "/our_team" },
  { title: "Contact", path: "/contact_us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    toggle();
  };

  const modalVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "tween", 
        duration: 0.3,
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut", // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 0.1,
        ease: "easeOut", // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const Duration = 0.25;
  const Stagger = 0.025;

  return (
    <nav className="w-full bg-[#460021] z-[9999] fixed">
      <div className="z-[9999] flex items-center justify-between w-full px-3 md:px-10 md:py-3">
        <div className="logo">
          <img
            src={logoo}
            className="h-[40px] w-[160px] md:w-[180px] md:h-[47px]"
            alt=""
          />
        </div>

        <div className="hidden md:flex gap-8 items-center justify-center">
          {navLinks.map((link, index) => (
            <motion.span
              key={index}
              initial="initial"
              whileHover="hovered"
              className="text-white opacity-70 font-onest font-semibold text-[16px] cursor-pointer relative block overflow-hidden"
            >
              <div>
                <Link to={link.path}>
                  {link.title.split("").map((l, i) => {
                    return (
                      <motion.span
                        variants={{
                          initial: { y: 0 },
                          hovered: { y: "-100%" },
                        }}
                        className="inline-block"
                        transition={{
                          duration: Duration,
                          ease: "easeInOut",
                          delay: Stagger  * i 
                        }}
                        key={i}
                      >
                        {l}
                      </motion.span>
                    );
                  })}
                </Link>
              </div>

              <div className="absolute inset-0">
                <Link to={link.path}>
                  {link.title.split("").map((l, i) => {
                    return (
                      <motion.span
                        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                        className="inline-block"
                        transition={{
                          duration: Duration,
                          ease: "easeInOut",
                          delay: Stagger  * i
                        }}
                        key={i}
                      >
                        {l}
                      </motion.span>
                    );
                  })}
                </Link>
              </div>
            </motion.span>
          ))}
        </div>

        <Link to="about_us" className="hidden md:block p-3 px-6 border-[1px] border-[#f0a800] bg-[#f0a800] rounded-full text-white font-[20px] hover:bg-transparent hover:text-[#f0a800] transition-all ease-in-out cursor-pointer ">Message us </Link>

        <div onClick={handleClick} className="md:hidden">
          <img src={menu} className="w-[40px] h-[70px] opacity-80" alt="menu" />
        </div>
      </div>

      <AnimatePresence className="z-[9999]">
        {isOpen && (  
          <motion.div
            className="fixed inset-0 z-[9999] flex justify-center items-center bg-[#f0a800] h-screen"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          > 
            <img
              src={cross}
              className="absolute top-1 right-4 w-[40px] h-[80px] opacity-80 cursor-pointer z-[9999]"
              onClick={toggle}
            />
            <motion.div
              className="relative bg-[#f0a800] w-full"
              variants={navLinksVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-8 items-center justify-center h-full ">
                {navLinks.map((link, index) => (
                  <motion.span
                    key={index}
                    className="text-white opacity-80 font-onest font-bold z-[9999] text-5xl cursor-pointer"
                    variants={linkItemVariants}
                  >
                    <Link to={link.path} onClick={toggle}>
                      {link.title}
                    </Link>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;