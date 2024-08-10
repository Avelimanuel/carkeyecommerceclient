import React from "react";
import { motion } from "framer-motion"

const Footer = () => {
  //Getting the current Year

  const currentYear = new Date().getFullYear();
  return (
    <motion.section
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, y: { type: "spring", stiffness: 10 } }}
    >
      <div className="flex justify-evenly items-center gap-5 p-8 bg-gray-300  max-lg:flex-col">
        <div className="flex flex-col flex-1 ">
          <h1 className="text-white font-extrabold underline text-3xl">Our Services</h1>
          <ul>
            <li>Spare Key Programming</li>
            <li className="max-lg-custom">All Keys Lost Programming</li>
            <li>Fleet & Fuel Management</li>
            <li>Car Computer Repair & Programming</li>
            <li>Car Tracking Devices</li>
            <li>Car Electroncs & Wiring</li>
            <li>Car Alarms</li>
            <li>Dash Cameras</li>
            <li>Reverse Cameras</li>
            <li>Ecu repairs</li>
            <li>EGR & Catalytic solutions</li>
          </ul>
        </div>

        <div className="flex flex-col flex-1 flex-shrink">
          <h1 className="text-white font-extrabold underline">Location</h1>
          {/* <FaLocationDot className="text-white" /> */}
          <h6>Along Kiambu Road Near AAR Hospital</h6>
          <h6 className="text-2xl font-bold">0716 884 011</h6>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-500">
        <div>
          <h6 className="text-center text-white">
            &copy; {currentYear} Car Key Experts. All rights reserved.{" "}
            <span className="text-blue-800 font-bold">
              Crafted By WebCraftersKE
            </span>
          </h6>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
