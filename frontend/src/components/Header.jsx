import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center mx-auto max-w-7xl p-3">
        <h1 className="font-bold text-xl">Auth App</h1>
        <ul className="flex gap-6">
          <Link to="/">
            <li className="text-lg font-medium">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-lg font-medium" >About</li>
          </Link>
          <Link to="/sign-in">
            <li className="text-lg font-medium">Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
