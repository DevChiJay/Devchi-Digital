import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog & News - Devchi Digital",
  description: "Stay updated with the latest trends in web design, SEO, and app development. Read our insights and tips for digital success.",
};

const blogPosts = [
  {
    id: 1,
    title: "Building Mobile Apps for the Nigerian Market: What Works",
    excerpt: "Discover the key factors to consider when developing mobile applications specifically for Nigerian users, including offline functionality and data efficiency.",
    date: "May 15, 2024",
    category: "App Development",
    author: "Devchi Team",
    readTime: "5 min read",
    slug: "building-mobile-apps-nigerian-market"
  },
  {
    id: 2,
    title: "The Rise of No-Code Tools in Nigeria: Should Developers Be Worried?",
    excerpt: "An analysis of how no-code platforms are changing the development landscape in Nigeria and what it means for professional developers.",
    date: "May 10, 2024",
    category: "Technology",
    author: "Devchi Team",
    readTime: "7 min read",
    slug: "rise-of-no-code-tools-nigeria"
  },
  {
    id: 3,
    title: "SEO Best Practices for Nigerian Businesses in 2024",
    excerpt: "Learn the most effective SEO strategies tailored for Nigerian businesses to improve local search visibility and drive organic traffic.",
    date: "May 5, 2024",
    category: "SEO",
    author: "Devchi Team",
    readTime: "6 min read",
    slug: "seo-best-practices-nigerian-businesses"
  },
  {
    id: 4,
    title: "Why Your Business Needs a Professional Website in 2024",
    excerpt: "Understanding the importance of professional web presence and how it impacts customer trust and business growth in the digital age.",
    date: "April 28, 2024",
    category: "Web Design",
    author: "Devchi Team",
    readTime: "4 min read",
    slug: "why-business-needs-professional-website"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Recent News & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights in web design, SEO, and app development.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
              <div className="max-w-3xl">
                <div className="text-blue-100 text-sm font-medium mb-4">FEATURED POST</div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-blue-100 text-sm mb-6">
                  <span>{blogPosts[0].date}</span>
                  <span>{blogPosts[0].readTime}</span>
                  <span className="bg-blue-500 px-3 py-1 rounded-full">{blogPosts[0].category}</span>
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div>{post.author}</div>
                      <div>{post.date}</div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest insights, tips, and updates about web design, SEO, and app development delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
