import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex flex-grow">
      {/* logo */}
      <Image
        className="flex-1"
        src="/assets/logo.png"
        alt="logo"
        height={100}
        width={100}
        objectFit="contain"
      />
      {/* Routes */}
      <div className="flex space-x-5">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>GALLERY</p>
        <p>CONTACT US</p>
      </div>
    </div>
  );
};

export default Header;
