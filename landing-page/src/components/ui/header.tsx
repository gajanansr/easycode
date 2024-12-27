"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-[#282828] shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-[#FFA116]" />
          <span className="text-2xl font-bold text-white">EasyCode</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          {["About", "Signup"].map((item) => (
            <Link
              key={item}
              to={item === "About" ? "why-choose" : item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-65}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
