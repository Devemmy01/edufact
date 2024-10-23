import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";
import a from "../assets/1.png";
import b from "../assets/2.png";
import c from "../assets/3.png";
import d from "../assets/4.png";
import don from "../assets/don.jpeg";
import us from "../assets/usa.png";
import uk from "../assets/uk.png";
import ge from "../assets/germany.png";
import newz from "../assets/newZ.png";
import can from "../assets/canada.png";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="-mt-20">
        <Slide>
          <h2 className="text-center text-[25px] md:text-[35px] text-white opacity-80 font-semibold font-onest">
            Our{" "}
            <span className="p-2 border border-[#f0a800] bg-[#f0a800] rounded-tl-2xl rounded-br-2xl">
              Partners
            </span>
          </h2>
        </Slide>
        <Slide>
          <p className="text-center text-[14px] md:text-[23px] pt-5 text-white opacity-80 font-semibold font-onest">
            We are trusted by many
          </p>
        </Slide>
        <div className="flex flex-wrap gap-5 w-full items-center justify-center mt-16">
          <Slide>
            <Link>
              <img src={a} className="h-[250px] rounded-xl" alt="" />
            </Link>
          </Slide>
          <Slide>
            <Link>
              <img src={b} className="h-[250px] rounded-xl" alt="" />
            </Link>
          </Slide>
          <Slide>
            <Link>
              <img src={c} className="h-[250px] rounded-xl" alt="" />
            </Link>
          </Slide>
          <Slide>
            <Link>
              <img src={d} className="h-[250px] rounded-xl" alt="" />
            </Link>
          </Slide>
        </div>
      </div>

      <Slide>
        <Link
          to="our_partners"
          className="p-3 px-6 mt-14 flex w-fit items-center justify-center mx-auto border-[1px] border-[#f0a800] bg-[#f0a800] rounded-full text-white font-[20px] hover:bg-transparent hover:text-[#f0a800] transition-all ease-in-out"
        >
          See more
        </Link>
      </Slide>

      <div className="mt-36 mb-10">
        <Slide>
          <h2 className="text-center text-[25px] md:text-[35px] text-white opacity-80 w-fit mx-auto font-semibold font-onest p-2 border border-[#f0a800] bg-[#f0a800] rounded-tl-2xl rounded-br-2xl">
            Testimonials
          </h2>
        </Slide>

        <Slide>
          <p className="text-center text-[14px] md:text-[18px] text-white opacity-80 font-onest font-semibold pt-3">
            See what other student have to say about us.
          </p>
        </Slide>

        <Slide>
          <div className="flex flex-col-reverse md:flex-row gap-5 p-4 md:p-7 lg:p-10 items-center justify-center mt-10 md:mt-16 rounded-3xl shadow-xl bg-pink-800 mx-5 sm:mx-10 md:mx-20">
            <div className="w-full">
              <p className="text-center text-[14px] md:text-[18px] text-white opacity-80 font-onest font-semibold pt-3">
                My name is Donald Okegbe, currently studying MSc. Information
                Technology at the University of The West of England. I got my
                admission through Edufact consultants. They are the right and
                best place to go to if you are looking to study abroad. They
                offer the best services with a very friendly atmosphere. They
                are also transparent and very professional. I recommend Edufact
                consultants to anyone who wants to study abroad. You are all in
                safe hands!!!
              </p>

              <div className="flex flex-col gap-2 mt-5">
                <h3 className="font-onest text-center text-[#fff] w-fit mx-auto text-[18px] md:text-[20px] font-semibold">
                  Donald Okegbe
                </h3>
                <p className="text-center text-[14px] text-white opacity-80 font-onest font-semibold">
                  Student at University of the west of England
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <img
                src={don}
                className="h-[260px] md:h-[300px] mx-auto rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </Slide>
      </div>

      <Slide>
        <h2 className="text-center text-[25px] md:text-[35px] text-white opacity-80 font-onest font-semibold pt-16 md:pt-32">
          We are trusted around the world
        </h2>
      </Slide>

      <Slide>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <img
            src={us}
            className="h-[100px] bg-pink-800 rounded-2xl md:h-[150px]"
            alt=""
          />
          <img
            src={uk}
            className="h-[100px] bg-pink-800 rounded-2xl md:h-[150px]"
            alt=""
          />
          <img
            src={ge}
            className="h-[100px] bg-pink-800 rounded-2xl md:h-[150px]"
            alt=""
          />
          <img
            src={can}
            className="h-[100px] bg-pink-800 rounded-2xl md:h-[150px]"
            alt=""
          />
          <img
            src={newz}
            className="h-[100px] bg-pink-800 rounded-2xl md:h-[150px]"
            alt=""
          />
        </div>
      </Slide>

      <div className="mt-32 mb-24">
        <Card />
      </div>
    </div>
  );
};

export default Home;
