import { Metadata } from "next";
import Footer from "@/components/Footer";
import { Code, TrendingUp, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - Devchi Digital",
  description: "Professional web development, mobile apps, AI & ML, custom APIs, DevOps, and SPA development services for businesses in Nigeria and beyond.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-6">
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
            {/* Web Development */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Custom websites built with modern technologies, responsive design, and optimized for performance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Responsive Design</li>
                <li>• E-commerce Solutions</li>
                <li>• CMS Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Custom API */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom API</h3>
              <p className="text-gray-600 mb-6">
                Tailored API development for seamless integration between your systems and third-party services.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• RESTful APIs</li>
                <li>• GraphQL</li>
                <li>• Microservices</li>
                <li>• Authentication & Security</li>
              </ul>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Intelligent solutions that leverage AI and machine learning to automate processes and gain insights.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Automated Solutions</li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile applications for iOS and Android platforms.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• iOS & Android</li>
                <li>• Cross-platform</li>
                <li>• API Integration</li>
                <li>• App Store Deployment</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DevOps</h3>
              <p className="text-gray-600 mb-6">
                Streamline your development processes with continuous integration, delivery, and infrastructure management.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• CI/CD Pipelines</li>
                <li>• Cloud Infrastructure</li>
                <li>• Containerization</li>
                <li>• Monitoring & Logging</li>
              </ul>
            </div>

            {/* Single Page Apps (SPA) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Page Apps (SPA)</h3>
              <p className="text-gray-600 mb-6">
                Fast, responsive, and interactive single page applications with modern frontend frameworks.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• React</li>
                <li>• Vue.js</li>
                <li>• Angular</li>
                <li>• State Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
