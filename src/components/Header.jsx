import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import UnstyledLink from "./UnstyledLink";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarClose = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between py-4 fixed left-0 top-0 w-full shadow-md z-30 gradient">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <UnstyledLink
              className="text-white font-bold text-2xl "
              onClick={() => setNavbarOpen(false)}
              href="/"
            >
              <img
                src="/images/logo-long.png"
                alt=""
                className="object-contain h-14 hover:opacity-90"
              />
            </UnstyledLink>
            <div
              className="cursor-pointer text-lg leading-none px-1 py-1 
							border border-solid border-transparent rounded-full lg:hidden outline-none focus:outline-none flex justify-center items-center"
            >
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg
                  className=" w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`mt-8 lg:mt-0 lg:flex flex-grow items-center ${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-x-0 space-y-1 list-none lg:ml-auto">
              <HeaderLink
                condition={true}
                onClick={handleNavbarClose}
                href="/plan"
                name="Создать меню"
              />
              <HeaderLink
                condition={true}
                onClick={handleNavbarClose}
                href="/posts"
                name="Публикации"
              />
              <HeaderLink
                condition={true}
                onClick={handleNavbarClose}
                href="/about"
                name="О нас"
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
