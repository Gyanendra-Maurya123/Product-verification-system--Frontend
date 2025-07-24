import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "./assets/Seller.jpg"; // ✅ Add your image here

const Seller = () => {
  const fullText = "Product Verification System";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) index = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Embedded Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }

          @keyframes glowColorCycle {
            0% {
              color: #ffffff;
              text-shadow: 0 0 8px #ffffff;
              opacity: 1;
            }
            33% {
              color: #facc15;
              text-shadow: 0 0 12px #facc15;
              opacity: 0.85;
            }
            66% {
              color: #2dd4bf;
              text-shadow: 0 0 10px #2dd4bf;
              opacity: 0.75;
            }
            100% {
              color: #ffffff;
              text-shadow: 0 0 8px #ffffff;
              opacity: 1;
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out;
          }

          .blinking-cursor::after {
            content: '|';
            animation: blink 1s step-end infinite;
            font-weight: 500;
            margin-left: 2px;
            color: #facc15;
          }

          .animate-glow-multicolor {
            animation: glowColorCycle 3.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background image and overlay */}
      <div className="relative w-full min-h-screen text-white overflow-hidden">

        {/* Background Image */}
        <img
          src={BackgroundImage}
          alt="Seller Background"
          className="absolute top-0 left-0 w-full h-full object-contain z-0"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

        {/* Main Content */}
        <div className="relative z-10">

          {/* Navbar */}
          <nav className="bg-black py-5 shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                  <Link to="/" className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition">
                    Home
                  </Link>
                  <Link to="/sell" className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition">
                    Sell Product To Consumer
                  </Link>
                  <Link to="/products" className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition">
                    Products For Sale
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Animated Title */}
          <header className="py-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold animate-fade-in-down blinking-cursor">
              <span className="bg-gradient-to-r from-yellow-400 via-white to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
                {displayText}
              </span>
            </h1>
            <p className="text-sm mt-2 text-white font-bold">through Blockchain</p>
          </header>

          {/* Content Section */}
          <section className="py-16 animate-fade-in-up">
            <div className="max-w-4xl mx-auto bg-white/10 rounded-xl p-10 text-center shadow-xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-white">Seller</h2>
              <p className="text-lg font-bold animate-glow-multicolor">
                Use the navigation bar above to perform operations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Seller;
