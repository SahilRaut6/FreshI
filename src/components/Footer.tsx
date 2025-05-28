import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold text-gray-800">FreshI</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transparent and immutable tracking of fresh produce from farm to table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/input" className="text-gray-600 hover:text-green-500 transition-colors">Data Input</Link></li>
              <li><Link to="/trace" className="text-gray-600 hover:text-green-500 transition-colors">Trace Product</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-500 transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} FreshI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;