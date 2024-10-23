import React, { useState } from "react";
import { motion } from "framer-motion";
import Slide from "../components/Slide";
import a from "../assets/t1.jpg";
import b from "../assets/t2.jpeg";
import c from "../assets/t3.jpeg";
import Card from "../components/Card";

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="pt-48">
      <Slide>
        <h2 className="text-center text-[25px] md:text-[35px] text-white opacity-80 font-semibold font-onest">
          Our{" "}
          <span className="p-2 border border-[#f0a800] bg-[#f0a800] rounded-tl-2xl rounded-br-2xl">
            Team
          </span>
        </h2>
      </Slide>

      <div className="grid gap-0 items-center justify-center mt-16 mx-5 pb-24">
        <Slide>
          <div className="p-5 bg-white md:mx-[10rem] lg:mx-[20rem] cursor-pointer">
            <img src={a} className="h-[230px] object-cover md:h-[250px] rounded-2xl mx-auto w-[330px]" alt="" />
            <h2 className="font-onest text-center text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px] mt-12">
              ADEYEMO OLUMIDE
            </h2>
            <p className="font-onest text-center text-black text-[14px] md:text-[15px] pt-2 font-semibold w-fit mx-auto">
              International Partnership Manager <br /> Europe Region
            </p>
          </div>
        </Slide>

        <Slide>
          <div
            className="p-5 bg-pink-800 md:mx-[13rem] lg:mx-[20rem] cursor-pointer"
            onClick={handleOpenModal}
          >
            <img
              src={b}
              className="h-[230px] md:h-[250px] object-cover rounded-2xl w-[330px] mx-auto"
              alt="Abiodun Kole-James"
            />
            <h2 className="font-onest text-center text-white text-[18px] md:text-[20px] font-semibold leading-[28px] mt-12">
              Abiodun Kole-James
            </h2>
            <p className="font-onest text-center text-white text-[14px] md:text-[15px] leading-[30px] font-semibold w-fit mx-auto">
              Team-lead Student Recruitment
            </p>
            <p className="font-onest text-center text-white text-[14px] md:text-[15px] leading-[30px] font-semibold mx-auto pt-10">
            My name is Abiodun Kole-James and I currently work as a Team-lead Student Recruitment at Edufact Consultants where I get to help Nigerian students achieve their dreams of studying abroad. My job involves leading a team of counsellors and assisting students with everything from selecting the perfect courses to obtaining visas and other important documents inline with our partner institutions goals. I graduated from Babcock University with a degree in Mass Communications - and while in school, I developed a passion for the power of effective communication in bringing people together, even across cultural divides.
            </p>
          </div>
          
        </Slide>

        <Slide>
          <div className="p-5 bg-white md:mx-[13rem] lg:mx-[20rem] cursor-pointer">
            <img src={c} className="h-[230px] object-cover md:h-[250px] rounded-2xl mx-auto w-[330px]" alt="" />
            <h2 className="font-onest text-center text-[#460021] text-[18px] md:text-[20px] font-semibold leading-[28px] mt-12">
              Victor Osuwa Esq. LLB
            </h2>
            <p className="font-onest text-center text-black text-[14px] md:text-[15px] leading-[30px] font-semibold w-fit mx-auto">
              Legal and compliance manager
            </p>

            <p className="font-onest text-center text-black text-[14px] md:text-[15px] leading-[30px] font-semibold mx-auto pt-10">
            My name is Victor Osuwa Esq. LLB, civil law (ABU) BL, (Nigerian Law school). I work as a Legal and compliance manager at Edufact Consułtants. I guide Edufact Team members and students towards adhering to our Partner institutions principles and the immigration policies of our study destinations. I work closely with Edufact partner institutions on contract sustainability.
            </p>
          </div>
        </Slide>
      </div>

      <div className="mt-24 mb-24">
        <Card />
      </div>
    </div>
  );
};

export default Team;
