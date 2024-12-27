"use client";

import { motion } from "framer-motion";
import { Clock, Brain, TrendingUp } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: <Clock className="h-12 w-12 text-[#FFA116]" />,
      title: "Save Time",
      description:
        "Get to the solution faster by understanding problems quickly.",
    },
    {
      icon: <Brain className="h-12 w-12 text-[#FFA116]" />,
      title: "Build Confidence",
      description: "Approach coding problems with a clearer mind.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#FFA116]" />,
      title: "Learn Faster",
      description:
        "Understand concepts in a simplified way to speed up your learning curve.",
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-[#282828]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose EasyCode?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center bg-[#282828] p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#FFA116]">
                {reason.title}
              </h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
