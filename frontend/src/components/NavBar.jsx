// import React, { useState, useEffect } from "react";
// import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
// import { Link } from "react-router-dom";

// export function NavBar() {
//   const [openNav, setOpenNav] = useState(false);
//   const [navOpacity, setNavOpacity] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setNavOpacity(scrollY > 50 ? 0.8 : 1);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navList = (
//     <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
//       {[
//         { name: "Home", path: "/" },
//         { name: "Learn Laws", path: "/learn" },
//         { name: "Ask a Question", path: "/ask" },
//       ].map((item) => (
//         <Typography
//           key={item.name}
//           as="li"
//           className="text-white text-lg font-medium transition-all duration-300 ease-in-out hover:text-yellow-400 cursor-pointer"
//         >
//           <Link to={item.path}>{item.name}</Link>
//         </Typography>
//       ))}
//     </ul>
//   );

//   return (
//     <Navbar
//       className="fixed top-0 w-full z-50 bg-[#443627] shadow-md px-6 py-3 lg:px-10 lg:py-4 transition-all duration-300"
//       style={{ opacity: navOpacity }}
//     >
//       <div className="flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-4">
//           <img src="src\assets\img\civica-logo.png" className="h-12 w-auto" alt="Civica Logo" />
//           <Typography as="a" href="#" className="text-white text-2xl font-semibold">
//             Civica
//           </Typography>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-8">
//           {navList}
//           <Button variant="text" size="md" className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#443627] transition-all">
//             Log In
//           </Button>
//           <Button variant="gradient" size="md" className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 transition-all">
//             Sign in
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <IconButton
//           variant="text"
//           className="lg:hidden text-white"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </IconButton>
//       </div>

//       {/* Mobile Navigation */}
//       <MobileNav open={openNav} className="lg:hidden bg-[#443627] p-4 rounded-lg">
//         <div className="flex flex-col items-center gap-4">
//           {navList}
//           <Button fullWidth variant="text" size="md" className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#443627] transition-all">
//             Log In
//           </Button>
//           <Button fullWidth variant="gradient" size="md" className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 transition-all">
//             Sign in
//           </Button>
//         </div>
//       </MobileNav>
//     </Navbar>
//   );
// }

import React, { useState, useEffect } from "react";
import { Navbar, Collapse, Typography, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [navOpacity, setNavOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setNavOpacity(window.scrollY > 50 ? 0.8 : 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navList = (
    <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
      {[
        { name: "Home", path: "/" },
        // { name: "Learn Laws", path: "/learn" },
        { name: "Ask a Question", path: "/ask" },
      ].map((item) => (
        <Typography
          key={item.name}
          as="li"
          className="text-white text-lg font-medium transition-all duration-300 ease-in-out hover:text-yellow-400 cursor-pointer"
        >
          <Link to={item.path}>{item.name}</Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar
      className="fixed top-0 w-full z-50 bg-[#443627] shadow-md px-6 py-3 lg:px-10 lg:py-4 transition-all duration-300"
      style={{ opacity: navOpacity }}
    >
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-4 cursor-pointer">
          <img src="src/assets/img/civica-logo.png" className="h-12 w-auto" alt="Civica Logo" />
          <span className="text-white text-2xl font-semibold">Civica</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navList}
          <Button variant="text" size="md" className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#443627] transition-all">
            Log In
          </Button>
          <Button variant="gradient" size="md" className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 transition-all">
            Sign in
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          className="lg:hidden text-white"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Navigation using Collapse */}
      <Collapse open={openNav}>
        <div className="lg:hidden bg-[#443627] p-4 rounded-lg">
          <div className="flex flex-col items-center gap-4">
            {navList}
            <Button fullWidth variant="text" size="md" className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#443627] transition-all">
              Log In
            </Button>
            <Button fullWidth variant="gradient" size="md" className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 transition-all">
              Sign in
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
