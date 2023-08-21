import React from "react";
import logo from "../../../assets/img/logo_smf.png";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import LeftContent from "./LeftContent/LeftContent";

const Content = ({ scrollTop }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <LeftContent scrollTop={scrollTop} />
        <motion.div
          className="grid-cols-6 flex justify-center flex-col text-white sticky top-0"
          animate={scrollTop === 0 ? { x: "-50%" } : { x: "0%", y: scrollTop }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center fixed h-screen flex-col top-[20em] bottom-1/2 transform -translate-y-1/2">
            <img src={logo} alt="logo" className="w-[25rem]" />
            <div className="info mt-[-2rem] m-5">
              <h1 className="text-xl font-robotoSlab">Senat Mahasiswa</h1>
              <ReactTyped
                strings={[
                  "Fakultas Ekonomi & Bisnis",
                  "Universitas Kristen Satya Wacana",
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                className="text-[2.2rem] font-abril"
              />
              <p className="text-justify font-robotoSlab w-[35rem] my-3 ">
                Akun Resmi Senat Mahasiswa Fakultas Ekonomi dan Bisnis
                Universitas Kristen Satya Wacana Organization Relations, Project
                & Media Partnership: 081384805665
              </p>
              <hr />
            </div>
            <div className="social-media  mx-5 flex justify-end">
              <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-green-400 flex justify-center items-center mx-2">
                <MdEmail size={25} />
              </div>
              <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-green-400 flex justify-center items-center mx-2">
                <AiFillLinkedin size={25} />
              </div>
              <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-green-400 flex justify-center items-center mx-2">
                <AiOutlineInstagram size={25} />
              </div>
              <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-green-400 flex justify-center items-center mx-2">
                <AiOutlineWhatsApp size={25} />
              </div>
            </div>
            <motion.div
              className="scrollme mt-[5rem]"
              animate={
                scrollTop === 0 ? { display: "block" } : { display: "none" }
              }
              transition={{ duration: 0.5 }}
            >
              <p className="text-center text-white font-bold">Scroll Down</p>
              <FaArrowDown size={25} className="animate-bounce mx-auto mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Content;
