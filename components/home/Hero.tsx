"use client";

import { useState, useEffect } from "react";
import ButtonRoute from "../shared/ButtonRoute";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assets/images/hero1.jpg",
    "/assets/images/hero2.jpg",
    "/assets/images/popular1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="grid grid-cols-4 md:grid-cols-3 grid-rows-1 h-[750px] md:h-screen shadow-box-shadow-darker">
      <article
        className="hidden md:block col-span-2"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      ></article>
      <article className="px-5 col-span-4 md:col-span-1 flex relative justify-center items-center bg-[url('/assets/images/hero2.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col relative pb-10 md:pt-24 justify-end md:justify-center px-4 items-start gap-5 bg-color-100/60 h-full w-full">
          <div className="leading-8 md:leading-[50px] text-sizeTitle font-bold">
            <h1 className="text-sizeTitle">Bravo</h1>
            <h1 className="">Energy</h1>
          </div>
          <p className="max-w-72 md:max-w-96 text-sizeParagraphBase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam
            similique rem cumque vitae quia, sit quas enim et omnis.
          </p>
          <ButtonRoute name={"Shop now"} design={false} />
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
