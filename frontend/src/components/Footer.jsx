import { Typography } from "@material-tailwind/react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#443627] text-white py-10 pt-30">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Logo & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="src\assets\img\civica-logo.png" alt="Civica Logo" className="w-12 h-12" />
            <Typography as="span" className="text-2xl font-semibold text-white">
              Civica
            </Typography>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center gap-6 mt-6 md:mt-0">
            {["About Us", "License", "Contribute", "Contact Us"].map((item) => (
              <li key={item}>
                <Typography
                  as="a"
                  href="#"
                  className="text-lg font-medium text-gray-300 transition-all hover:text-yellow-400"
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-600" />

        {/* Copyright */}
        <Typography className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Civica. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};
