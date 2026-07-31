import React from "react";
import { NavLink } from "react-router";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <h1>Skymart</h1>

      <div className="flex gap-5 text-md items-center">
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
          to="/main"
          end
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
          to="/main/shop"
        >
          Shop
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
          to="/main/about"
        >
          About
        </NavLink>
      </div>

      <div className="flex gap-5 items-center">
        <h1>
          Hey, <strong className="text-yellow-300">Dev</strong>
        </h1>
        <button>Cart</button>
        <LogOut className="cursor-pointer" size={18.5} />
      </div>
    </div>
  );
};

export default Navbar;
