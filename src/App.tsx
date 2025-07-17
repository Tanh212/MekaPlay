// src/App.tsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold">MyTailwindSite</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex-grow flex flex-col justify-center items-center text-center px-6"
      >
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Build Beautiful Websites Fast
        </h2>
        <p className="text-xl max-w-2xl mb-8 drop-shadow-md">
          Tailwind CSS lets you build modern, responsive sites without writing
          tons of custom CSS.
        </p>
        <div className="space-x-4">
          <a
            href="#pricing"
            className="px-6 py-3 bg-white text-indigo-600 font-bold rounded shadow hover:bg-indigo-50 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-6 py-3 border border-white rounded hover:bg-white hover:text-indigo-600 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg">
              <svg
                className="w-16 h-16 mb-4 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9"></path>
                <path d="M12 4v16"></path>
                <path d="M4 12h16"></path>
              </svg>
              <h4 className="text-xl font-semibold mb-2">Easy to Use</h4>
              <p>
                Minimal setup, intuitive utility classes, and great docs help
                you build quickly.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg">
              <svg
                className="w-16 h-16 mb-4 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <h4 className="text-xl font-semibold mb-2">Responsive</h4>
              <p>
                Mobile-first design means your site looks great on any device.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg">
              <svg
                className="w-16 h-16 mb-4 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <h4 className="text-xl font-semibold mb-2">Customizable</h4>
              <p>
                Tailwind lets you extend and customize your design system
                easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-indigo-200 p-6 text-center">
        &copy; 2025 MyTailwindSite. All rights reserved.
      </footer>
    </div>
  );
}
