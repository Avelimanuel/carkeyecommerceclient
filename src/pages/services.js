import {motion} from "framer-motion"
import PremiumServices from "../sections/Premiumservices";

const Services = () => {
  const fadein ={
    initial:{opacity:0},
    animate:{opacity:10,y:0,transition:{duration:8}}
  }

  
  return (
    <section className="my-4 mx-5 ">
      <div className=" ">
        <h1 className="font-bold text-3xl text-center">Our Services</h1>
      </div>

      <div className="flex justify-center items-center m-5 max-lg:flex-col">
        <div className="flex flex-col justify-between items-center">
          
          <h1 className="font-bold text-red-700 text-3xl m-4">
            Lost Key Services
          </h1>
          <motion.p {...fadein} className="max-w-lg  leading-2">
            At <span className="text-red-500">CarKeyExperts</span>, we
            understand how frustrating and stressful it can be to lose your car
            keys. That's why we offer comprehensive{" "}
            <span className="text-red-500">lost car key services</span> to get
            you back on the road quickly and efficiently. Our team of skilled
            auto locksmiths is equipped with the latest technology to{" "}
            <span className="text-red-600">
              cut and program new keys for all car makes and models on the spot.
            </span>{" "}
            Whether your key is lost, stolen, or damaged, we provide emergency
            mobile locksmith services to reach you wherever you are. In addition
            to key replacement, we can also handle key fob and remote
            replacements, as well as ignition repair and replacement if
            necessary. With our fast, reliable, and affordable service, you can
            trust CarKeyExperts to provide the solution you need with minimal
            disruption to your day. Don't let a lost key ruin your plans—contact
            us today for prompt and professional assistance.
          </motion.p>
        </div>
        <motion.div whileHover={{scale:1}}
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.2,x:{type:"spring",stiffness:10}}} className="ml-8 h-70 w-80 border-2 border-red-400  max-sm:mt-10 overflow-hidden rounded">
          <motion.img
            src="/images/lexuslostkey.jpg"
            className="object-cover object-center"
            whileHover={{scale:2}}
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.2,x:{type:"spring",stiffness:10},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1
          }}
            
          />
        </motion.div>
      </div>
      <div className="flex justify-center items-center max-lg:flex-col">
        <div className="flex flex-col">
        <h1 className="font-bold text-red-700 text-3xl m-4  text-center">
            Spare Key Services
          </h1>
          <motion.div whileHover={{scale:1}}
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.2,x:{type:"spring",stiffness:10}}} className="mr-8  h-70 w-80 border-2 border-red-400  max-sm:mt-10 overflow-hidden rounded">
            <motion.img src="/images/cx5.png" className="object-cover object-center"  whileHover={{scale:2}}
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.2,x:{type:"spring",stiffness:10}}}/>
          </motion.div>
        </div>
        <div className="flex flex-col justify-between items-center">
          
         <div className=" flex justify-center items-center h-full">
         <motion.p {...fadein}className="max-w-lg  leading-2 ">
            At CarKeyExperts, we offer reliable spare key services to ensure you
            always have a backup for your vehicle. Our expert technicians can
            quickly and accurately cut and program additional keys for all car
            makes and models, providing you with the convenience and peace of
            mind that comes with having a spare. Whether you need a duplicate
            key for a family member or simply want a backup in case of
            emergencies, our advanced equipment and skilled team ensure a
            perfect match to your original key. With our efficient and
            affordable spare key services, you can avoid the hassle and stress
            of being locked out or stranded. Contact CarKeyExperts today to get
            your spare key made swiftly and professionally.
          </motion.p>
         </div>
        </div>
      </div>

      <PremiumServices/>
      
    </section>
  );
};

export default Services;
