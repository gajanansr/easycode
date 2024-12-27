"use client";

import { motion } from "framer-motion";
import { FileText, Lightbulb, BookOpen, Puzzle } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <FileText className="h-12 w-12 text-[#FFA116]" />,
      title: "Simplify Problem Statements",
      description:
        "Get a simpler, more intuitive explanation of coding problems.",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-[#FFA116]" />,
      title: "Hints to Guide Your Approach",
      description:
        "Helpful hints to guide you without giving the solution away.",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#FFA116]" />,
      title: "Real-Life Examples",
      description: "Understand abstract problems with relatable examples.",
    },
    {
      icon: <Puzzle className="h-12 w-12 text-[#FFA116]" />,
      title: "Seamless Integration with LeetCode",
      description:
        "Easily get simplified explanations without leaving the problem page.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#FFA116] sm:bg-[#282828]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How EasyCode Helps You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 bg-[#363636] p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#FFA116]">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
