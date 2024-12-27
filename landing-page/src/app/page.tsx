"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import Features from "@/components/ui/features";
import WhyChoose from "@/components/ui/why-choose";
import SignupForm from "@/components/ui/signup-form";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A] text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyChoose />
        <Features />
        <SignupForm />
      </main>
      <Footer />
      <motion.div
        className="fixed bottom-4 right-4 bg-[#FFA116] text-black p-2 rounded-full cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="top" smooth={true} duration={500}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
