import React from "react";
import { Link } from "react-router-dom";
import a from "../assets/1.png";
import b from "../assets/2.png";
import c from "../assets/3.png";
import d from "../assets/4.png";
import e from "../assets/5.png";
import f from "../assets/6.png";
import g from "../assets/7.png";
import h from "../assets/8.png";
import i from "../assets/9.png";
import j from "../assets/10.png";
import k from "../assets/11.png";
import l from "../assets/12.png";
import m from "../assets/13.png";
import n from "../assets/14.png";
import o from "../assets/15.png";
import p from "../assets/16.png";
import q from "../assets/17.png";
import r from "../assets/18.png";
import s from "../assets/19.png";
import t from "../assets/20.png";
import u from "../assets/21.png";
import v from "../assets/22.png";
import w from "../assets/23.png";

import Slide from "../components/Slide";

const Partners = () => {
  return (
    <div className="pt-52">
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
        <Slide>
          <Link>
            <img src={e} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={f} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={g} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={h} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={i} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={j} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={k} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={l} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={m} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={n} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={o} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={p} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={q} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={r} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={s} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={t} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={u} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={v} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
        <Slide>
          <Link>
            <img src={w} className="h-[250px] rounded-xl" alt="" />
          </Link>
        </Slide>
      </div>
    </div>
  );
};

export default Partners;
