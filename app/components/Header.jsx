import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[30vh]"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/2339181/pexels-photo-2339181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{ top: "75%" }}
      >
        <img
          src="https://img.freepik.com/free-vector/wine-logo-template_1195-35.jpg?w=1380&t=st=1705658673~exp=1705659273~hmac=a33f9f1a07c8b9750f6575fb3284c4a3b554fa9a49eb9ad3151e9c9cee30ce37"
          alt="Logo"
          className="w-[120px] h-[120px] rounded-lg"
        />
      </div>

      <div className="relative z-10">
        <nav className="flex justify-between items-center p-4 w-full">
          <HamburgerMenu />
          <div></div>
        </nav>
        <div className="text-center py-20">
          <h1 className="text-white text-4xl uppercase tracking-widest"></h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
