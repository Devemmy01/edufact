import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollAnim from "../../ScrollAnim";
import logo from "../assets/logo.png";
import log from "../assets/log.png";
import usa from "../assets/usa.png";
import uk from "../assets/uk.png";
import can from "../assets/canada.png";
import germ from "../assets/germany.png";
import star from "../assets/star.png";
import newZ from "../assets/newZ.png";

import Slide from "./Slide";

const sectionVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  const { offsetY2, getTransformSpeed } = ScrollAnim();
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="main"
    >
      <div className="p-6 -rotate-12 bg-[#facd2d]/30 backdrop-blur-md absolute -z-10 top-[10rem] left-[2rem] md:left-[15rem]" />
      <div className="p-6 rotate-6 bg-[#facd2d]/30 backdrop-blur-md absolute -z-10 top-[30rem] left-10" />
      <div className="p-6 bg-[#facd2d]/30 top-[27rem] md:top-[30rem] right-10 md:right-20 absolute -z-10 -rotate-12" />
      <div className="p-6 bg-[#facd2d]/30 top-[6rem] md:top-[10rem] right-5 md:right-48 absolute -z-10 rotate-12" />

      <div className="mt-14 md:px-32 lg:w-1/2 lg:px-0">
        <Slide>
          <h1 className="text-center p-1 px-4 md:px-5 border-[1px] border-[#f0a800] rounded-full w-fit bg-[#f0a800]/30 backdrop-blur-md mx-auto text-white text-[14px] md:text-[18px] shadow-lg flex gap-4 items-center whitespace-nowrap hover:-translate-y-2 transition-all ease-in-out">
            <img src={log} className="h-[30px]" alt="" />
            Trusted by many
            <img src={star} className="h-[20px] -ml-2" alt="" />
          </h1>
        </Slide>
        <Slide>
          <h1 className="font-onest text-center text-white opacity-80 text-[30px] md:text-[50px] mt-2 font-semibold md:leading-[65px]">
            Empowering The Next Wave Of
            <span className="text-[#facd2d]"> Global Scholars</span>
          </h1>
        </Slide>
        <Slide>
          <p className="text-center text-white opacity-70 font-onest pt-5 text-[14px] md:text-[15px]">
            We work with local high schools and colleges, scholarship boards and
            many organizations in the business of international education.
          </p>
        </Slide>
        <Slide>
          <Link
            to="contact_us"
            className="p-3 px-6 mt-10 flex w-fit items-center justify-center mx-auto border-[1px] border-[#f0a800] bg-[#f0a800] rounded-full text-white font-[20px] hover:bg-transparent hover:text-[#f0a800] transition-all ease-in-out"
          >
            Contact us
          </Link>
        </Slide>
      </div>

      <div className="md:-mt-20 -mr-[80rem] md:-mr-[170rem]">
        <p
          className="font-[700] bg-transparent p-0 text-center text-[305px] sm:text-[100px] md:text-[150px] lg:text-[250px] font-Ojuju opacity-[0.15] text-[#facd2d] -mt-3"
          style={{
            transform: `translateX(-${offsetY2 * getTransformSpeed()}px)`,
          }}
        >
          Edufact
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
