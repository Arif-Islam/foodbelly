import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-16 md:h-24 p-3 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        FOODBELLY
      </Link>
      <p className="text-sm lg:text-base text-center lg:uppercase">©copyright, all rights reserved.</p>
    </div>
  );
};

export default Footer;
