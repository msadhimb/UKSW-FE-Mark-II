import React from "react";
import { motion } from "framer-motion";
import background from "../../../../assets/img/background-left-content.png";
import newspaper from "../../../../assets/img/newspaper.png";
import catalog from "../../../../assets/img/katalog.png";
import kritik from "../../../../assets/img/kritik_saran.png";

const LeftContent = ({ scrollTop }) => {
  return (
    <motion.div
      className={` h-[100rem]  z-50 grid-cols-6 `}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      animate={scrollTop === 0 ? { opacity: 0, y: "50rem" } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mt-[8rem] text-5xl text-center font-abril border-b-2 border-black pb-5">
        Our Content
      </h1>

      <div className="our-content m-5">
        <div className="flex justify-start items-center ">
          <img src={newspaper} alt="newspaper" className="w-[15rem]" />
          <div className="">
            <h2 className="text-3xl font-abril">ISU KASTRAT</h2>
            <p className="text-justify mt-3 font-robotoSlab">
              Temukan informasi mengenai isu-isu ekonomi terupdate!
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center mt-[-5rem]">
          <div className="ml-[2rem] text-right">
            <h2 className="text-3xl font-abril">KATALOG</h2>
            <p className="text-justify mt-3 font-robotoSlab">
              Berisi segala informasi mengenai kegiatan Senat Mahasiswa FEB UKSW
              periode 2023.
            </p>
          </div>
          <img src={catalog} alt="newspaper" className="w-[15rem]" />
        </div>
        <div className="flex justify-start items-center mt-[-4rem]">
          <img src={kritik} alt="newspaper" className="w-[15rem]" />
          <div className="">
            <h2 className="text-3xl font-abril">ISU KASTRAT</h2>
            <p className="text-justify mt-3 font-robotoSlab">
              Temukan informasi mengenai isu-isu ekonomi terupdate!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeftContent;
