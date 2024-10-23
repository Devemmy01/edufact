import React from "react";
import { motion } from "framer-motion";

import Slide from "../components/Slide";
import Card from "../components/Card";

const sectionVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.5 },
  },
};

const About = () => {
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
          <h1 className="font-onest text-center text-white opacity-80 text-[30px] md:text-[50px] mt-2 font-semibold md:leading-[65px]">
            Turn your ambition into a
            <span className="text-[#facd2d]"> success story</span>
          </h1>
        </Slide>
        <Slide>
          <p className="text-center text-white opacity-70 font-onest pt-5 text-[14px] md:text-[15px]">
            Edufact CONSULTANTS is an International student recruitment company.
            Our Head office is located in Lagos, commercial hub of Nigeria and
            we have outlets across African region. It’s an organization comprise
            of a team of overseas student recruitment consultants and core
            professionals. We recruit students for our partner universities and
            colleges across the world; Canada, United kingdom, Australia, Europe
            and the United States of America.
          </p>
          <p className="text-center text-white opacity-70 font-onest pt-5 text-[14px] md:text-[15px]">
            We work with local high schools and colleges, scholarship boards and
            many organizations in the business of international education. We
            also supply educational materials to schools, government and
            corporate organizations. We consult for local schools and many
            educational outlets, with a view to growing them. We develop
            educational content for schools, colleges and education outlets. We
            plan and host education fair within and outside Nigeria.
          </p>
        </Slide>
      </div>

      <div className="mt-20 font-onest text-center text-white opacity-80 text-[25px] md:text-[35px] font-semibold md:leading-[65px]">
        <Slide>
          <h3>WHY CHOOSE US?</h3>
        </Slide>

        <div className="flex flex-wrap gap-5 md:gap-3 w-full justify-center mt-7">
          <div className="h-[300px] md:h-[350px] w-full md:w-[45%] lg:w-[30%] rounded-3xl flex flex-col items-center justify-center py-5 px-4 bg-opacity-10 bg-white backdrop-blur-lg shadow-lg">
            <Slide>
              <h2 className="font-onest text-left text-white text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Skilled Professionals in Student recruitment
              </h2>
              <p className="font-onest text-left text-white opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-7">
                We have a team of international student recruitment consultants,
                who have been in the industry for more than 2 decades and have
                sustained their integrity in international student placement.
              </p>
            </Slide>
          </div>

          <div className="h-[300px] md:h-[350px] w-full md:w-[45%] lg:w-[30%] rounded-3xl flex flex-col items-center justify-center py-5 px-4 bg-opacity-10 bg-white backdrop-blur-lg shadow-lg">
            <Slide>
              <h2 className="font-onest text-left text-white text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Professional Digital Marketer
              </h2>
              <p className="font-onest text-left text-white opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-7">
                We have highly digitalized marketing professionals, who are vast
                in the use of digital marketing tools in leads generation and
                also using same in solving students application problems.
              </p>
            </Slide>
          </div>

          <div className="h-[300px] md:h-[350px] w-full md:w-[45%] lg:w-[30%] rounded-3xl flex flex-col items-center justify-center py-5 px-4 bg-opacity-10 bg-white backdrop-blur-lg shadow-lg">
            <Slide>
              <h2 className="font-onest text-left text-white text-[18px] md:text-[20px] font-semibold leading-[28px]">
                International Business Understanding
              </h2>
              <p className="font-onest text-left text-white opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-7">
                We understand the business of international education. Our
                extensive experience of over a decade in the industry gives us a
                huge advantage of having a deeper understanding of the industry
                in Nigeria and Africa as a whole.
              </p>
            </Slide>
          </div>
        </div>
      </div>

      <div className="mt-40 font-onest text-center text-white opacity-80 text-[25px] md:text-[35px] font-semibold md:leading-[65px]">
        <Slide>
          <h3>What We Do</h3>
        </Slide>

        <div className="flex flex-wrap gap-5 md:gap-3 w-full justify-center mt-7">
          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Counselling
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We counsel potential international students on choice of course
                and study destinations.
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Admission assistance
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We assist students in securing offer of admission from any
                school of choice, across the globe.
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Scholarship
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We counsel students on global scholarship opportunities
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Verification
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We verify students credential and check their credibilit
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Visa procurement
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We guide students through student visa processing, across study
                destinations.
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Education fair
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We organize education fair across African region.
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Loan assistance
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We assist on students loan.
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                Market research
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We conduct international student market research and analysis.
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                School marketing
              </h2>
              <p className="font-onest text-left text-black opacity-80 text-[14px] md:text-[15px] leading-[30px] font-semibold pt-5">
                We market overseas schools; universities, colleges and high
                schools within the African continent.
              </p>
            </Slide>
          </div>

          <div className="h-[200px] w-full md:w-[40%] lg:w-[25%] rounded-3xl flex flex-col items-center justify-center px-4 bg-white">
            <Slide>
              <h2 className="font-onest text-left text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px]">
                UK Nursing Bridging Programme
              </h2>
            </Slide>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Card />
      </div>
    </motion.div>
  );
};

export default About;