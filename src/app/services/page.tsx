import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services - Devchi Digital",
  description: "Professional web design, SEO optimization, and mobile app development services for businesses in Nigeria and beyond.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Web Design Service */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Design</h3>
              <p className="text-gray-600 mb-6">
                Custom website design and development using modern technologies like React, Next.js, and responsive design principles.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Responsive Design</li>
                <li>• E-commerce Solutions</li>
                <li>• CMS Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* SEO Service */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic to your website.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Keyword Research</li>
                <li>• On-page Optimization</li>
                <li>• Technical SEO</li>
                <li>• Analytics & Reporting</li>
              </ul>
            </div>

            {/* App Development Service */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">App Development</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile app development for iOS and Android using React Native and modern frameworks.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• iOS & Android Apps</li>
                <li>• Cross-platform Solutions</li>
                <li>• API Integration</li>
                <li>• App Store Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
