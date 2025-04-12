"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const HeroSection = () => {
  const fullText = "Hi, I’m Pratiksha";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
    } else {
      // After typing is complete, reset after a delay
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="bg-black py-28 px-6 text-white relative overflow-hidden">
      {/* Gradient Background Animation with Purple and Black */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-black opacity-40 animate-gradient" />
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <Card className="bg-transparent border border-white/20 shadow-xl backdrop-blur-md">
            <CardContent className="p-10 md:p-16">
              <h1
                className={`${sora.className} text-5xl md:text-6xl font-bold leading-tight text-white tracking-tight`}
              >
                {displayedText}
                <span className="animate-pulse">|</span>
              </h1>

              <p
                className={`${sora.className} text-lg md:text-xl mt-6 text-gray-300 leading-relaxed max-w-2xl mx-auto`}
              >
                A Frontend Developer passionate about crafting sleek,
                user-centric web experiences with modern tools and pixel-perfect
                precision.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10"
              >
                <Button
                  asChild
                  className="bg-purple-600 text-white font-bold px-8 py-4 rounded-full hover:bg-purple-500 transition-all shadow-lg"
                >
                  <a href="#projects">View My Work</a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
