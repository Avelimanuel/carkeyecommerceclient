import React from "react";
import { motion } from "framer-motion";

const PremiumServices = () => {
  return (
    <section className="items-center">
      <div className="mt-4 mx-5 rounded">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, y: { type: "spring", stiffness: 10 } }}
          className="text-center text-2xl font-bold"
        >
          Our <span className="text-red-500">Premium Services</span>
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, x: { type: "spring", stiffness: 10 } }}
        className="flex justify-center gap-4 items-center mt-5 h-full max-lg:flex-col"
      >
        <a
          href="#"
          class="flex flex-col items-center p-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-200 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/images/egr.jpg"
            alt=""
          />
          <motion.div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              EGR Error Solution
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              When we talk about upgrading the vehicle performance, one of the
              most wanted ECU tuning services is the EGR delete. In diesel
              engines, the EGR system (exhaust gas recirculation) is one of the
              most important but also the most problematic elements. We provide
              specialized solutions for resolving exhaust gas recirculation
              (EGR) errors. Our expert technicians use advanced diagnostic tools
              to accurately identify and fix EGR issues, ensuring your vehicle
              runs smoothly and efficiently. Trust us to keep your engine
              performing at its best.
            </p>
          </motion.div>
        </a>

        <a
          href="#"
          class="flex flex-col items-center p-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-200 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/images/catdelete.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              CATALYTIC Error Solution
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The removal of a CAT may increase power and decrease fuel
              consumption slightly. On some vehicles, when you remove the CAT
              physically, will eventually cause an engine malfunction and will
              cause the vehicle to go in safety mode or also known as limp mode.
              We can cure the mentioned problem on most vehicles, by removing
              the CAT function from the software of the engine control unit
              (ECU). This means the ECU will no longer recognise the Catalytic
              Converter and the vehicle will no longer go in safety mode or limp
              mode.
            </p>
          </div>
        </a>
      </motion.div>

      <motion.div
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, x: { type: "spring", stiffness: 10 } }}
        className="flex flex-wrap justify-center gap-4 items-center max-lg:flex-col my-8"
      >
        <div className="flex flex-col gap-5">
          <h6 className="font-bold text-center text-2xl text-red-600">
            DPF Error Solution
          </h6>
          <p className="max-w-lg">
            At CarKey Experts, we provide professional DPF (Diesel Particulate
            Filter) delete services directly from your vehicle's computer
            software. Our experienced technicians use advanced diagnostic tools
            to safely and effectively remove the DPF system from your vehicle's
            software, enhancing engine performance and fuel efficiency. This
            service is ideal for off-road or competition vehicles where
            regulations permit. Trust us to deliver a seamless DPF delete
            process that optimizes your vehicle's performance and reliability.
          </p>
        </div>
        <div>
          <img
            src="/images/dpf.jpg"
            alt=""
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter max-lg:m-3"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, y: { type: "spring", stiffness: 10 } }}
        className=" my-6 w-full p-10"
      >
        <h1 className="text-center text-4xl text-red-600 font-bold">
          Car Track Installation
        </h1>
        <div className="relative flex justify-center items-center max-lg:flex-col gap-8 max-lg:m-5">
          <div className="my-4 rounded w-">
            <img
              src="/images/gpsmap.jpg"
              alt="gps image"
              className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter"
            />
          </div>
          <div>
            <p className="leading-2 max-w-lg ">
              At CarKey Experts, we are dedicated to enhancing the security and
              convenience of your vehicle. We offer professional installation of
              advanced car tracking devices that provide real-time location
              tracking and comprehensive monitoring of your vehicle. Our
              state-of-the-art tracking systems ensure you always know where
              your car is, giving you peace of mind against theft and
              unauthorized use. With features like geofencing, speed alerts, and
              detailed trip history, our car tracking devices are designed to
              keep you informed and in control. Trust our experienced
              technicians to install your tracking device seamlessly and
              efficiently, ensuring optimal performance and security. Protect
              your investment and stay connected with our reliable car tracking
              solutions.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, x: { type: "spring", stiffness: 10 } }}
        className="flex flex-wrap justify-center gap-4 items-center max-lg:flex-col my-8"
      >
        <div className="flex flex-col gap-5">
          <h6 className="font-bold text-center text-2xl text-red-600">
            Fleet & Fuel Management Systems
          </h6>
          <p className="max-w-lg">
            At CarKey Experts, we specialize in providing top-notch fleet and
            fuel management system installations to optimize your business
            operations. Our cutting-edge systems offer comprehensive monitoring
            and control over your entire fleet, allowing you to track vehicle
            locations, manage fuel consumption, and ensure driver efficiency.
            With our advanced technology, you can receive real-time data and
            analytics, helping you make informed decisions to reduce costs,
            improve productivity, and enhance overall fleet performance. Our
            expert technicians ensure a seamless installation process,
            customized to meet the specific needs of your business. Enhance your
            fleet management with our reliable and efficient solutions, and take
            control of your operational efficiency and fuel expenses like never
            before.
          </p>
        </div>
        <div>
          <img
            src="/images/fleetmanagement.jpg"
            alt=""
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter max-lg:m-3"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, y: { type: "spring", stiffness: 10 } }}
        className="flex flex-wrap justify-center gap-4 items-center my-8 max-lg:flex-col"
      >
        <div>
          <img
            src="/images/carkeycutting.jpg"
            alt=""
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter max-lg:m-3"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h6 className="font-bold text-center text-2xl text-red-600">
            Car Key Cutting
          </h6>
          <p className="max-w-lg">
            We offer specialized car key cutting services to ensure you have a
            dependable key for any situation. Our team of professionals uses
            state-of-the-art tools to accurately cut keys for a wide range of
            vehicle makes and models. Whether you need an extra key, have lost
            your original, or need a complete replacement, we provide quick and
            effective solutions. Trust CarKey Experts for precise key cutting
            that guarantees you always have a perfectly functioning key when you
            need it.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, x: { type: "spring", stiffness: 10 } }}
        className=" my-6 w-full p-10"
      >
        <h1 className="text-center text-4xl text-red-600 font-bold">
          Car Alarm Installation
        </h1>
        <div className="relative flex justify-center items-center max-lg:flex-col gap-8 max-lg:m-5">
          <div className="my-4 rounded w-">
            <img
              src="/images/caralarm.jpg"
              alt="gps image"
              className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter"
            />
          </div>
          <div>
            <p className="leading-2 max-w-lg ">
              We provide professional car alarm installation services to enhance
              the security of your vehicle. Our skilled technicians are
              experienced in installing advanced alarm systems that deter theft
              and provide peace of mind. We offer a range of high-quality alarm
              options tailored to fit various car makes and models, ensuring
              optimal protection. With our precise installation process, you can
              trust that your car's alarm system will function reliably and
              effectively. Choose CarKey Experts for top-notch car alarm
              installations that keep your vehicle safe and secure.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, x: { type: "spring", stiffness: 10 } }}
        className=" my-6 w-full p-10"
      >
        <h1 className="text-center text-4xl text-red-600 font-bold">
          Car Key Battery Replacement
        </h1>
        <div className="relative flex justify-center items-center max-lg:flex-col gap-8 max-lg:m-5">
          <div className="my-4 rounded w-">
            <img
              src="/images/batteries.jpg"
              alt="gps image"
              className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter"
            />
          </div>
          <div>
            <p className="leading-2 max-w-lg ">
              We understand the inconvenience of a malfunctioning car key due to
              a dead or weak battery. That's why we offer fast and reliable car
              key battery replacement services to ensure your key fob is always
              functioning at its best. Our skilled technicians can quickly
              replace the battery in your car key, restoring its full
              functionality so you can get back on the road without delay. We
              use high-quality batteries to guarantee long-lasting performance.
              Visit us today for a hassle-free car key battery replacement
              experience.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, x: { type: "spring", stiffness: 10 } }}
        className="flex flex-wrap justify-center gap-4 items-center max-lg:flex-col my-8"
      >
        <div className="flex flex-col gap-5">
          <h6 className="font-bold text-center text-2xl text-red-600">
            Ignition & Door Lock Repairs.
          </h6>
          <p className="max-w-lg">
            At CarKey Experts, we specialize in comprehensive ignition and door
            lock repair services for all car models. Our team of experienced
            technicians is equipped with the knowledge and tools to diagnose and
            fix a wide range of issues, from broken keys and jammed locks to
            malfunctioning ignition systems. Whether your car is a domestic
            model or a foreign make, we have the expertise to handle it all. We
            understand how crucial it is to have a fully functioning ignition
            and secure door locks, which is why we strive to provide prompt and
            reliable service. Our repairs are conducted with precision and care,
            using high-quality parts to ensure long-lasting results. At CarKey
            Experts, we are committed to getting you back on the road quickly
            and safely, with the peace of mind that your vehicle's security is
            intact. Trust us for all your ignition and door lock repair needs
            and experience the exceptional service that sets us apart.
          </p>
        </div>
        <div>
          <img
            src="/images/ignitionlock.jpg"
            alt=""
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter max-lg:m-3"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default PremiumServices;
