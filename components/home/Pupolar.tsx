import Image from "next/image";
import React from "react";
import ButtonRoute from "../shared/ButtonRoute";

const Pupolar = () => {
  return (
    <section className="flex justify-center  items-center w-full px-2 _____ my-32 media-350:px-4 media-776:px-8 media-996:px-10 media-1096:px-20 text-center md:text-left">
      <article className="flex flex-col md:flex-row justify-between items-center w-full gap-3">
        <div className="flex flex-col justify-center md:items-start gap-3 text-left">
          <h1 className="text-sizeSubtitle font-bold ">What's Popular</h1>
          <p className="max-w-96 text-sizeParagraphBase ">
            Daisy Shop's popular items feature beautifully crafted floral
            arrangements and vibrant bouquets, perfect for any occasion. Known
            for elegance, quality, and attention to detail, these bestsellers
            are customer favorites.
          </p>
          <div>
            <ButtonRoute name={"See more"} design={true} />
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-3 md:gap-5 ">
          <div className=" w-48 md:w-96 h-[300px] md:h-[400px]">
            <Image
              className="h-full w-full bg-cover object-cover"
              src={"/assets/images/popular1.jpg"}
              width={300}
              height={300}
              alt=""
            />
          </div>
          <div className=" w-48 md:w-96 h-[300px] md:h-[400px]">
            <Image
              className="h-full w-full bg-cover object-cover"
              src={"/assets/images/popular2.jpg"}
              width={300}
              height={300}
              alt=""
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Pupolar;
