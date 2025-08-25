"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaTiktok, FaArrowRight } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-sky-100 to-sky-200 border-t border-sky-300 mt-16">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo + Address - Full width on mobile, then 2 columns */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-sky-900 bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                Athena LMS
              </span>
            </Link>
            <p className="text-sm text-sky-800 mb-4 max-w-md">
              Transforming education through innovative technology and personalized learning experiences.
            </p>
            <div className="text-sm text-sky-800 mb-4">
              <p className="font-medium text-sky-900">Athena LMS Edutech Pvt. Ltd.</p>
              <p>456 Learning Avenue</p>
              <p>Vancouver, Canada</p>
              <p className="mt-2">
                <a href="mailto:hello@athena.lms" className="text-blue-700 hover:underline font-medium">hello@athena.lms</a>
              </p>
              <p>
                <a href="tel:+16045551244" className="text-sky-800 hover:text-sky-900">+1 (604) 555-1244</a>
              </p>
              <div className="mt-3 space-y-1">
                <p className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Monday - Friday: 09:00 - 18:00</span>
                </p>
                <p className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  <span>Saturday - Sunday: Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sky-900 mb-4 text-lg relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-sky-600">
              Solutions
            </h4>
            <ul className="space-y-3 text-sky-800">
              <li>
                <Link href="/virtual-classroom" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Virtual Classroom</span>
                </Link>
              </li>
              <li>
                <Link href="/collaboration" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Collaboration</span>
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Analytics</span>
                </Link>
              </li>
              <li>
                <Link href="/content-management" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Content Management</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-sky-900 mb-4 text-lg relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-sky-600">
              About
            </h4>
            <ul className="space-y-3 text-sky-800">
              <li>
                <Link href="/contact" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Our Team</span>
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Press</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-sky-900 mb-4 text-lg relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-sky-600">
              Locations
            </h4>
            <ul className="space-y-3 text-sky-800 mb-6">
              <li>
                <Link href="/vancouver" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>All Locations</span>
                </Link>
              </li>
              <li>
                <Link href="/remote" className="hover:text-blue-700 transition-colors flex items-center group">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Remote</span>
                </Link>
              </li>
            </ul>
            
            {/* Language Switcher */}
            <div>
              <h4 className="font-semibold text-sky-900 mb-3 text-sm">Language</h4>
              <button
                className="flex items-center gap-2 border border-sky-300 text-sky-800 rounded-lg px-4 py-2 text-sm hover:bg-sky-100 transition-colors w-full"
                aria-label="Language Selector"
                type="button"
                disabled
                style={{ cursor: "not-allowed" }}
              >
                <IoMdGlobe className="w-4 h-4" /> 
                <span>English</span>
                <span className="ml-auto">▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="border-t border-sky-300 py-8 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-semibold text-sky-900 text-lg mb-1">Stay updated with Athena LMS</h3>
              <p className="text-sky-700 text-sm">Subscribe to our newsletter for the latest updates and features</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border border-sky-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent w-full md:w-64 text-sky-800"
              />
              <button className="bg-sky-600 text-white px-4 py-2 rounded-r-lg hover:bg-sky-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Social strip */}
      <div className="border-t border-sky-300 py-6 px-6 bg-sky-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-sky-800">© {new Date().getFullYear()} Athena LMS. All rights reserved.</p>
          
          <div className="flex items-center gap-5">
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-sky-700 hover:text-blue-700 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-sky-700 hover:text-pink-600 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-sky-700 hover:text-blue-600 transition-colors">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" target="_blank" aria-label="GitHub" className="text-sky-700 hover:text-sky-900 transition-colors">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://tiktok.com" target="_blank" aria-label="TikTok" className="text-sky-700 hover:text-black transition-colors">
              <FaTiktok className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-2 md:mt-0">
            <Link href="/privacy" className="text-sky-800 hover:text-blue-700 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sky-800 hover:text-blue-700 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-sky-800 hover:text-blue-700 transition-colors">
              Cookies
            </Link>
            <Link href="/sitemap" className="text-sky-800 hover:text-blue-700 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
