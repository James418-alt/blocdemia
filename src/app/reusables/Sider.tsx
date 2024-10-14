import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";

const Sider = () => {
  return (
    <div className="w-full">
      <div className="p-3">
        <Image
          src={logo}
          alt="Blocdemia logo"
          width={100}
          height="50"
          className="w-[130px] h-[30px]"
        />
      </div>
    </div>
  );
};

export default Sider;
