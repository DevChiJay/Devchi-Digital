"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { skills, achievements, experience } from "@/data";
import {
  Download,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function PortfolioSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-green-500/20 rounded-full blur-xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Chiemela James
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-6">
                  Founder & Lead Developer at Devchi Digital Ltd
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                  I'm a passionate software developer and entrepreneur with 5+ years of experience 
                  creating digital solutions that drive business growth. I specialize in building 
                  modern web applications, mobile apps, and implementing customized strategies that help 
                  businesses succeed online.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} />
                  <span>support@devchi.me</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  <Download size={16} className="mr-2" />
                  Download CV
                </Button>
                <Link href="/contact">
                <Button variant="outline" className="px-6 py-3">
                  <Mail size={16} className="mr-2" />
                  Get In Touch
                </Button>                
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Image
                      src="/profile.jpg"
                      alt="Chiemela James - Founder of Devchi Digital"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Achievements & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building digital solutions that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <achievement.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proficient in modern technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-3">
                    <skillCategory.icon size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {skillCategory.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey in building digital solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {index < experience.length - 1 && (
                  <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gray-200" />
                )}
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full" />
                
                <Card className="p-6 ml-4">
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.role}
                      </h3>
                      <span className="text-blue-600 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 font-medium mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss how I can help 
            your business grow with modern web solutions.
          </p>
          <div>
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-3 rounded-3xl">
              Start a Project
            </Link>
            <Link href="/#projects" className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-3 rounded-3xl">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
