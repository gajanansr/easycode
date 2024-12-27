"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storeEmail } from "../../../firebaseConfig";

export default function SignupForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting email..."); // Add this log

    // Basic email validation (optional)
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      console.log("Calling storeEmail...");

      await storeEmail(email);
      console.log("Submitted email:", email);
      setEmail(""); // Reset email field
    } catch (error) {
      console.error("Error submitting email:", error); // Log any issues here
    }

    // Reset the form
    setEmail("");
  };

  return (
    <section id="signup" className="py-20 bg-[#282828]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay Updated
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-[#363636] text-white border-[#FFA116]"
            />
            <Button
              type="submit"
              className="bg-[#FFA116] text-black hover:bg-[#FFB84D]"
            >
              Notify Me
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
