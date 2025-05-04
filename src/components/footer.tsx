"use client";
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 px-8 pt-12 text-white font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">HimaTech</h3>
            <p className="text-gray-400 font-normal leading-relaxed">
              Cutting-edge technology solutions for Zanzibar and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} className="opacity-75 hover:opacity-100" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={20} className="opacity-75 hover:opacity-100" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={20} className="opacity-75 hover:opacity-100" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub size={20} className="opacity-75 hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-tight">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-tight">Services</h4>
            <ul className="space-y-2 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-tight">Contact Us</h4>
            <div className="space-y-3 text-gray-400 font-medium">
              <div className="flex items-start gap-3">
                <FiMail className="mt-1 flex-shrink-0 opacity-75" />
                <a href="mailto:info@himatech.co.tz" className="hover:text-white transition-colors">
                  info@himatech.co.tz
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 flex-shrink-0 opacity-75" />
                <a href="tel:+255777123456" className="hover:text-white transition-colors">
                  +255 777 123 456
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0 opacity-75" />
                <span>Stone Town, Zanzibar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-800 pt-8 pb-12">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-gray-400 text-sm font-medium">
              &copy; {CURRENT_YEAR} Hima Technologies. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;