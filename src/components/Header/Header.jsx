"use client";
import coin from "../../../public/wax-lgoo-small.png";
import React, { useState } from "react";

import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

function Header() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(showNav);
  };
  return (
    <>
      {/* <div className="relative flex items-center justify-between z-30">
        <a href="https://waxchain.io/">
          <div className="flex items-center gap-1.5 md:gap-2">
            <img src={coin} className="w-5 md:w-7" />

            <h2 className="text-2xl italic ">
              <b>waxchain</b>
            </h2>
          </div>
        </a>

        <div className=" flex flex-row justify-start gap-10">
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#staking"
              className="text-lg text-white/50 hover:text-white"
            >
              Staking{" "}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a href="#buy" className="text-lg text-white/50 hover:text-white">
              Buy Now{" "}
            </a>
          </div>
        </div>

        <div className="relative">
          <button
            className="flex items-center bg-[#00b4f4] px-3 md:px-5 py-1 md:py-2 gap-2 md:gap-2.5 rounded-md"
            onClick={
              isConnected
                ? () => open({ view: "Account" })
                : () => open({ view: "Connect" })
            }
          >
            <span className="text-sm font-medium">
              {isConnected
                ? address.slice(0, 6) + "..." + address.slice(-4)
                : "Connect Wallet"}
            </span>
            <span className="flex"></span>
          </button>
        </div>
      </div> */}
      <div className="bg-[#030B15] p-3 md:p-5 relative py-5">
        <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center gap-3">
          <div>
            <img src={coin} className="w-12 md:w-[70px]" />
          </div>
          <div
            className={`absolute base:relative w-full base:w-auto top-[72px] base:top-auto left-0 base:left-auto bg-white base:bg-transparent p-5 base:p-0 z-50 ${
              showNav ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col base:flex-row items-center gap-7">
              <li className="text-xs font-semibold text-black base:text-white cursor-pointer">
                Home
              </li>
              <li className="text-xs font-semibold text-black base:text-white cursor-pointer">
                About Us
              </li>
              <li className="text-xs font-semibold text-black base:text-white cursor-pointer">
                Tokenomics
              </li>
              <li className="text-xs font-semibold text-black base:text-white cursor-pointer">
                Roadmap
              </li>
              <li className="text-xs font-semibold text-black base:text-white cursor-pointer">
                Contact Us
              </li>
              <li className="text-xs font-semibold text-black base:text-white cursor-pointer">
                Whitepaper
              </li>
              <li className="text-xs font-semibold text-black base:text-white cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <button className="border border-white hover:border-[#00C4F4] hover:text-[#00C4F4] transition duration-200 w-[75px] md:w-[90px] h-8 md:h-10 flex justify-center items-center rounded-[70px] text-xs md:text-sm font-semibold uppercase">
              Soon
            </button>
            <img
              onClick={toggleNav}
              src="/toggle.svg"
              alt="toggle"
              className={`w-5 block base:hidden ${
                showNav ? "hidden" : "block"
              }`}
            />
            <img
              onClick={toggleNav}
              src="/close.svg"
              alt="close"
              className={`w-5 h-5 block base:hidden ${
                showNav ? "block" : "hidden"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
