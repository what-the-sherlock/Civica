
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full h-190 bg-[#EFDCAB] pt-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 overflow-hidden font-serif">
      {/* Text Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="md:basis-1/2 text-[#443627] md:ml-10 pt-10 md:pt-40 text-center md:text-left"
      >
        <h1 className="text-6xl md:text-[110px] font-extrabold">Civica</h1>
        <p className="text-[#D98324] text-xl md:text-3xl mt-4">Because Law shouldn't be a mystery</p>
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.2 }}
        className="md:basis-1/2 flex justify-center relative items-center"
      >
        <img 
          src="src\assets\img\shapes-removebg-preview1.png" 
          alt="Justice Lady" 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-170 object-contain absolute"
        />
        <img 
          src="src\assets\img\1.png" 
          alt="Justice Lady" 
          className="w-150 max-w-md md:max-w-lg lg:max-w-xl h-170 object-contain absolute"
        />
        
        <img 
          src="src/assets/img/justice-lady-removebg.png" 
          alt="Justice Lady" 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-170 object-contain relative"
        />
        
        
      </motion.div>
    </div>
  );
};

export default Banner;


// import React from "react";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <div 
//       className="w-full h-190 bg-[url('src/assets/img/lady.jpg')] bg-cover bg-center pt-20 px-6 md:px-16 overflow-hidden font-serif flex flex-col md:flex-row items-center"
//     >
//       {/* Text Section */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 1 }}
//         className="md:w-1/2 text-[#443627] md:ml-10 pt-10 md:pt-40 text-center md:text-left"
//       >
//         <h1 className="text-6xl md:text-[110px] font-extrabold">Civica</h1>
//         <p className="text-[#D98324] text-xl md:text-3xl mt-4">
//           Because Law shouldn't be a mystery
//         </p>
//       </motion.div>
      
//       {/* Image Section */}
//       <motion.div 
//         initial={{ opacity: 0, x: 100 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 1.2 }}
//         className="md:w-1/2 flex justify-center items-center"
//       >
//         {/* You can place an image or animation here if needed */}
//       </motion.div>
//     </div>
//   );
// };

// export default Banner;


