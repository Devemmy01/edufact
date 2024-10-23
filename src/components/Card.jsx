import React from 'react'
import arrow from "../assets/arrow.svg"
import ab from "../assets/card.png"

import { Link } from 'react-router-dom'
import Slide from './Slide'

const Card = () => {
  return (
    <Slide>
        <div className="relative flex flex-col gap-4 lg:flex-row rounded-3xl shadow-xl bg-pink-800 mx-5 sm:mx-10 md:mx-20">
        <div className="flex flex-col p-5 pt-10 gap-5 justify-center">
          <h2 className="text-[20px] md:text-[25px] text-white opacity-80 font-semibold font-onest">
          From choosing the right educational pathway to securing international placements, Edufact CONSULTANTS is with you every step of the way, ensuring a seamless journey to your academic success abroad.
          </h2>
          <Link
            to="/contact_us"
            className="p-4 px-6 flex gap-3 bg-[#f0a800] rounded-full text-white font-[20px] w-fit hover:bg-transparent hover:text-[#f0a800] border border-[#f0a800] transition-all ease-in-out"
          >
            Reach out to us
            <img src={arrow} className="w-[20px] -rotate-45 opacity-80" />
          </Link>
        </div>

        <div className="w-full">
        <img src={ab} className="w-[300px] h-[300px] md:h-[355px] mx-auto mt-5" alt="" />
        </div>
      </div>
    </Slide>
  )
}

export default Card