"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaTiktok } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-12 py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Logo + Address */}
          <div className="flex-1 min-w-[230px]">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                Athena LMS
              </span>
            </Link>
            <div className="text-sm text-gray-600 mb-4">
              Athena LMS Edutech Pvt. Ltd.<br />
              456 Learning Avenue,<br />
              Vancouver, Canada<br />
              <a href="mailto:hello@athena.lms" className="underline hover:text-gray-800">hello@athena.lms</a><br />
              +1 (604) 555-1244
              <div className="mt-2">
                <span className="block">Monday - Friday: 09:00 - 18:00</span>
                <span className="block">Saturday - Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/virtual-classroom" className="hover:text-gray-900">Virtual Classroom</Link></li>
              <li><Link href="/collaboration" className="hover:text-gray-900">Collaboration</Link></li>
              <li><Link href="/analytics" className="hover:text-gray-900">Analytics</Link></li>
              <li><Link href="/content-management" className="hover:text-gray-900">Content Management</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">About</h4>
            <ul className="space-y-2 text-sm text-gray-600">
				<li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-gray-900">Careers</Link></li>
                <li><Link href="/team" className="hover:text-gray-900">Our Team</Link></li>
                <li><Link href="/press" className="hover:text-gray-900">Press</Link></li>
            
            </ul>
          </div>

          {/* Company/Resources/Language */}
          <div className="flex flex-col gap-6 min-w-[160px]">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Locations</h4>
              <ul className="space-y-2 text-sm text-gray-600">
           <li><Link href="/vancouver" className="hover:text-gray-900">All Locations</Link></li>
              <li><Link href="/remote" className="hover:text-gray-900">Remote</Link></li>
              </ul>
            </div>
            <div>
              {/* Language Switcher */}
              <button
                className="flex items-center gap-2 border text-gray-700 rounded px-3 py-1 font-medium text-sm hover:bg-gray-50"
                aria-label="Language Selector"
                type="button"
                disabled
                style={{ cursor: "not-allowed" }}
              >
                <IoMdGlobe className="w-4 h-4" /> English ▼
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Social strip */}
      <div className="border-t border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Athena LMS. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-gray-700">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-gray-700">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-gray-700">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" target="_blank" aria-label="GitHub" className="hover:text-gray-700">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://tiktok.com" target="_blank" aria-label="TikTok" className="hover:text-gray-700">
              <FaTiktok className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-gray-900">
              Cookies
            </Link>
            <Link href="/sitemap" className="hover:text-gray-900">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
