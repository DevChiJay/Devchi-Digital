import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Building Mobile Apps for the Nigerian Market - Devchi Digital",
  description: "Discover key factors for developing mobile apps specifically for Nigerian users, including offline functionality and data efficiency.",
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                App Development
              </span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Mobile Apps for the Nigerian Market: What Works
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Devchi Team</div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>May 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>Devchi Digital</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="h-64 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <div className="text-xl font-medium">Mobile App Development</div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nigeria's mobile app market is rapidly growing, with over 180 million mobile phone users and increasing smartphone adoption. However, developing apps for this market requires understanding unique local challenges and opportunities.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Considerations for Nigerian Mobile Apps</h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Data Efficiency</h3>
            <p className="text-gray-700 mb-6">
              Data costs remain high in Nigeria compared to global standards. Apps that consume excessive data will quickly lose users. Focus on:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Optimizing images and media content</li>
              <li>Implementing efficient caching strategies</li>
              <li>Providing data usage controls</li>
              <li>Offering offline functionality where possible</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Offline Functionality</h3>
            <p className="text-gray-700 mb-6">
              Network connectivity can be inconsistent, especially in rural areas. Your app should gracefully handle offline scenarios by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Storing critical data locally</li>
              <li>Implementing progressive sync</li>
              <li>Providing clear offline indicators</li>
              <li>Enabling core functionality without internet</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Integration</h3>
            <p className="text-gray-700 mb-6">
              Nigeria has a diverse payment ecosystem. Consider integrating multiple payment options:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Bank transfers and USSD codes</li>
              <li>Mobile money platforms</li>
              <li>Digital wallets like Paystack and Flutterwave</li>
              <li>Card payments with strong 3D Secure support</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Recommendations</h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cross-Platform Development</h3>
            <p className="text-gray-700 mb-6">
              Consider React Native or Flutter for cost-effective development that targets both iOS and Android simultaneously. This approach allows you to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Reduce development time and costs</li>
              <li>Maintain consistent user experience</li>
              <li>Share business logic across platforms</li>
              <li>Faster time to market</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
            <p className="text-gray-700 mb-6">
              Many users in Nigeria use mid-range to budget smartphones. Optimize for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Lower-end device compatibility</li>
              <li>Minimal memory usage</li>
              <li>Fast app launch times</li>
              <li>Smooth animations and transitions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Building successful mobile apps for the Nigerian market requires understanding local constraints and user behavior. By prioritizing data efficiency, offline functionality, and performance optimization, developers can create apps that truly serve Nigerian users' needs.
            </p>

            <p className="text-gray-700 mb-6">
              At Devchi Digital, we specialize in creating mobile applications tailored for the Nigerian market. Our team understands these unique challenges and can help you build apps that succeed locally.
            </p>
          </article>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Mobile App?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you create a mobile app that succeeds in the Nigerian market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
