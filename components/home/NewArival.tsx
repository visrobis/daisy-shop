"use client";
import React, { useEffect, useState } from "react";
import ButtonRoute from "../shared/ButtonRoute";

const NewArival = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assets/images/new1.jpg",
    "/assets/images/new2.jpg",
    "/assets/images/new3.jpg",
    "/assets/images/new4.jpg",
    "/assets/images/new5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <section className="h-[350px] md:h-screen w-full shadow-box-shadow-top">
      <article
        className="h-full w-full  "
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className=" flex flex-col justify-end items-start h-full w-full bg-color-400/5 pb-5 _____ my-32 media-350:px-4 media-776:px-8 media-996:px-10 media-1096:px-20 text-center md:text-left">
          <div>
            <h1 className=" p-5 rounded-md bg-color-400/20 left-10 bottom-10 text-white text-sizeSubtitle font-bold">
              New Products
            </h1>
          </div>
          <div>
            <ButtonRoute name="Shop Now" design={false} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default NewArival;
