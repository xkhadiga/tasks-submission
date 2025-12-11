"use client";
import React, { useState } from "react";
import Image from "next/image";

// swiper for slider functionality
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// images/assets
import img1 from "./assets/bg1.png";
import img2 from "./assets/bg2.jpg";
import img3 from "./assets/bg3.jpg";
import img4 from "./assets/bg4.jpg";
import img5 from "./assets/bg5.jpg";
import tag1 from "./assets/tag1.png";

import { PhoneIcon, WhatsappIcon, HeartIcon } from "../../../public/Icons";

// shadcn/ui components
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// motion for animations
import { motion } from "framer-motion";

// data for cards
function CardsContainer() {
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
  ];

  // like state for heart icon
  const [liked, setLiked] = useState(false);
  const [likedCards, setLikedCards] = useState({});

  // handle like toggle & 
  const handleLike = (id: number) => {
    setLiked(!liked);
    setLikedCards((prevLikedCards) => ({
      ...prevLikedCards,
      [id]: !prevLikedCards[id],
    }));
  };

  return (
    <div className=" flex w-full">
      {/* slider */}
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        slidesPerGroup={1}
        className="mySwiper "
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          420: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item) => (
          // card
          <SwiperSlide key={item.id}>
            <div className="relative p-2 md:p-6 rounded-xl h-[450px] md:h-[600px] w-full flex my-2 items-end justify-center overflow-hidden hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] transition-shadow duration-300">
              {/* background image */}
              <Image
                src={item.img}
                alt="card bg"
                fill
                className={`object-cover rounded-xl transition-opacity duration-500 z-0                   
                }`}
                loading="lazy"
                
              />
              {/* icons */}
              <div className="flex justify-between items-center absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6">
                {/* left icons (phone and whatsapp) */}
                <div className="flex gap-2">
                  <span className="w-[2.2rem] h-[2.2rem] md:w-[2.8rem] md:h-[2.8rem] bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <PhoneIcon />
                  </span>
                  <span className="w-[2.2rem] h-[2.2rem] md:w-[2.8rem] md:h-[2.8rem] bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <WhatsappIcon />
                  </span>
                </div>
                {/* Favorites Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      onClick={() => handleLike(item.id)}
                      className="w-[2.2rem] h-[2.2rem] md:w-[2.8rem] md:h-[2.8rem] bg-white rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <HeartIcon
                        fill={likedCards[item.id] ? "#b12028" : "transparent"}
                      />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to favorites</p>
                  </TooltipContent>
                </Tooltip>
              </div>

                  {/* card content - inner card */}
              <motion.div
                className="flex flex-col gap-1 z-10  p-4 md:p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* card header  */}
                <div className="flex justify-between items-center">
                  {/* price */}
                  <span className="text-xl sm:text-2xl font-semibold text-[#b12028]">
                    5,000,000 L.E
                  </span>
                  {/* tags */}
                  <div className="flex gap-2 items-center">
                    <Image
                      src={tag1}
                      alt="tag"
                      className="w-10 h-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]
"
                    />
                    <span className="bg-[#fef2f3] text-[#b12028] text-sm sm:text-base px-2  rounded-md">
                      Villa
                    </span>
                  </div>
                </div>
                {/* title */}
                <h1 className="font-semibold text-lg sm:text-xl">
                  Lorem ipsum dolor sit
                </h1>
                {/* description */}
                <p className="text-sm sm:text-base text-[#7B7B7B] font-poppins ">
                  A chic and fully-furnished 2-bedroom apartment with panoramic
                  city views .
                </p>
                <Separator className="my-2 h-px bg-gray-300" />
                {/* info */}
                <div className="flex items-center justify-between text-sm  gap-2 ">
                  {/* location */}
                  <span>Alexandria, Egypt</span>

                  {/* details */}
                  <div className="flex gap-1 md:gap-4 text-center">
                    <div className="flex flex-col items-center ">
                      <span> 400 </span>
                      <span className="font-bold"> Sq .ft </span>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="mx-1 md:mx-2 h-6 bg-gray-300 border"
                    />
                    <div className="flex flex-col items-center">
                      <span>6</span>
                      <span className="font-bold"> Rooms </span>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="mx-1 md:mx-2 h-6 bg-gray-300 border"
                    />
                    <div className="flex flex-col items-center">
                      <span> 3 </span>
                      <span className="font-bold"> Bath </span>
                    </div>
                  </div>
                </div>
                {/* button */}
                <Button className="mt-4 bg-[#b12028] hover:bg-[#90171d] cursor-pointer py-6 sm:py-8 text-md text-white font-light w-full ">
                  <Tooltip>
                    <TooltipTrigger asChild className="cursor-pointer">
                      <span>View Property Details</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View more details </p>
                    </TooltipContent>
                  </Tooltip>
                </Button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CardsContainer;
