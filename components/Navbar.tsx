import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-28 flex justify-center items-center ">
      <div className="fixed h-28 z-50 flex justify-between items-center bg-color-100/60 w-full px-2 shadow-box-shadow-dark  _____ media-350:px-4 media-776:px-8 media-996:px-10 media-1096:px-20">
        <div>
          <Link className="text-sizeLogo" href={"/"}>
            Daisy Shop
          </Link>
        </div>

        <ul className="flex justify-between items-center gap-2 text-sizeParagraphSm">
          <li className="flex justify-center items-center h-28 px-2 hover:bg-color-100/80 border-b-2/0 hover:border-b-2 hover:border-black/10  ">
            <Link className=" py-10" href={"/"}>
              Home
            </Link>
          </li>
          <li className="flex justify-center items-center h-28 px-2 hover:bg-color-100/80 border-b-2/0 hover:border-b-2 hover:border-black/10  ">
            <Link className=" py-10" href={"/pages/products"}>
              Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
