import React from "react";
import { FaInstagram, FaLinkedin, FaGlobe, FaGithub } from "react-icons/fa";
import Herosectionpart from "./Herosectionpart.jsx";

export default function Hero() {
  return (
    <div id="home" className="max-w-[2000px]">
      <div className="max-w-[2000px]">
        <div className="flex flex-col md:flex-row justify-center pt-30 md:pt-40 w-full">
          {/* Left Side (Phone + Scroll) - only on md+ */}
          <div className="hidden md:flex left-0 flex-col items-center text-white w-[5%]">
            <div className="flex flex-col items-center pb-20">
              <img src="/dail.png" alt="Dial" className="pb-4" />
              <a
                href="tel:+923294003441"
                className="text-lg font-bold [writing-mode:vertical-rl] rotate-180"
              >
                (+92) 329-4003441
              </a>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-bold text-[#c1bbbb] tracking-widest mb-2 [writing-mode:vertical-rl] rotate-180">
                SCROLL DOWN
              </p>
              <img src="/Arrow.png" alt="Arrow" className="w-5 h-25" />
            </div>
          </div>

          {/* Middle (Hero content) */}
          <div className="w-full md:w-[50%]">
            <Herosectionpart />
          </div>

          {/* Empty Right Spacer */}
          <div className="hidden md:block w-[40%]">
            <img src="" alt="" />
          </div>

          {/* Right Side (Social Links) - only on md+ */}
          <div className="hidden md:flex right-0 flex-col items-center text-white w-[5%]">
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold text-[#c1bbbb] tracking-widest mb-2 [writing-mode:vertical-rl] rotate-180">
                FOLLOW ME
              </p>
              <img src="/Arrow.png" alt="Arrow" className="w-5 h-25" />

              <div className="flex flex-col space-y-4 pt-20 items-center">
                <a
                  href="https://www.instagram.com/hanzala_135/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1bbbb] border border-[#656262] bg-[#2c2b2b] rounded-full p-3 hover:text-amber-100"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/hanzala-rashid-76b9252a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1bbbb] border border-[#656262] bg-[#2c2b2b] rounded-full p-3 hover:text-amber-100"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://github.com/hanzala135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1bbbb] border border-[#656262] bg-[#2c2b2b] rounded-full p-3 hover:text-amber-100"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://hanzala-portfolio-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1bbbb] border border-[#656262] bg-[#2c2b2b] rounded-full p-3 hover:text-amber-100"
                >
                  <FaGlobe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 👇 Mobile Bottom Section (visible only on sm < md) */}
      </div>
    </div>
  );
}
