"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Code, Smartphone, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import Link from "next/link";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Digital Success";
  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    
    const typewriterInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else if (!isDeleting && currentIndex > fullText.length) {
        // Pause at full text for 2 seconds before starting to delete
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setDisplayedText(fullText.slice(0, currentIndex));
      } else if (isDeleting && currentIndex === 0) {
        // Pause at empty text for 1 second before restarting
        setTimeout(() => {
          isDeleting = false;
          currentIndex = 0;
        }, 1000);
      }
    }, isDeleting ? 100 : 150);
    
    return () => clearInterval(typewriterInterval);
  }, []);

  const handleGetStarted = () => {
    console.log("Get Started clicked with email:", email);
    // Here you would typically handle the email submission
  };

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight break-words"
              >
                Transforming Ideas into{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <br className="block sm:hidden" />{displayedText}<span className="animate-pulse">|</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-full sm:max-w-2xl break-words"
              >
                We develop web and mobile applications for large and small businesses.
              </motion.p>
            </div>

            {/* Email Input Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3 max-w-md"
            >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-lg">
                  Do you have a product idea?
                </span>
              
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 px-6 text-base font-medium rounded-lg transition-all duration-200 transform hover:scale-105 cursor-pointer flex items-center justify-center group">
                  Share with us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            {/* Partner Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-15"
            >
              <p className="text-sm text-gray-500 mb-4">
                20+ Trusted Partners
              </p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-800">Google</div>
                <div className="text-2xl font-bold text-gray-800">Facebook</div>
                <div className="text-2xl font-bold text-gray-800">Insta</div>
                <div className="text-2xl font-bold text-gray-800">Dribbble</div>
                <div className="text-2xl font-bold text-gray-800">Fundbox</div>
                <div className="text-2xl font-bold text-gray-800">Segment</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Services Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex"
          >
            <div className="relative">
              {/* Main Services Cards */}
              <div className="grid gap-6 max-w-md">
                {/* Web Design Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Web Design</h3>
                      <p className="text-sm text-gray-600">
                        Expert in Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-700">
                    Modern, responsive websites built with the latest
                    technologies
                  </div>
                </motion.div>

                {/* SEO Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Rank Higher</h3>
                      <p className="text-sm text-gray-600">
                        Across Lagos with SEO
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-700">
                    Boost your search rankings and drive organic traffic
                  </div>
                </motion.div>

                {/* Mobile App Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Mobile Apps</h3>
                      <p className="text-sm text-gray-600">
                        for both Android & iOS
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-700">
                    Cross-platform mobile solutions that engage users
                  </div>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
