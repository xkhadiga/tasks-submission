"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import CardsContainer from "./CardsContainer";
import FrameIcon from "./assets/Frame138.svg";
import { ArrowIcon } from "../../../public/Icons";

function FigmaUi() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex relative">
      {/* frame svg */}
      <Image
        src={FrameIcon}
        alt="Frame Icon"
        className="w-14 h-14 sm:w-20 sm:h-20 md:w-40 md:h-40 absolute right-0 top-5  "
      />

      {/* main container */}
      <div className="w-full px-1 md:pl-20 my-28 gap-6 flex flex-col ">
        {/*  header text */}
        <motion.div
          className="flex flex-col  gap-1 md:gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <header className="text-xl md:text-4xl font-bold">
            Discover The{" "}
          </header>
          <i className="text-xl md:text-4xl text-[#b12028]">
            Newest Real Estate Offerings
          </i>
          <p className="md:text-xl ">
            Stay ahead with our newest real estate oppertunities .
          </p>
        </motion.div>

        {/* slider - cards container */}
        <CardsContainer />

        {/* bottom link - properties */}
        <div className="properties-link self-end flex items-center gap-2 font-bold hover:text-[#b12028] transition-colors duration-300 mx-2">
          <Link href="/">See All Properties</Link>
          <span>
            <ArrowIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default FigmaUi;
