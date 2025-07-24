import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BackgroundImage from "./assets/ConsumerHome.jpg"; // Ensure correct path

export default function ConsumerHome() {
  const fullText = "Product Verification System";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index % (fullText.length + 1)));
      setIndex((prev) => prev + 1);
    }, 150);
    return () => clearInterval(interval);
  }, [index]);

  // MetaMask detection logic
  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask is not installed. Please install it to use this application.");
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background image */}
      <img
        src={BackgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* Content layered above */}
      <div className="relative z-10">
        <style>
          {`
            @keyframes colorBlink {
              0% { color: #ff69b4; text-shadow: 0 0 6px #ff69b4; }
              50% { color: #00bfff; text-shadow: 0 0 10px #00bfff; }
              100% { color: #ff69b4; text-shadow: 0 0 6px #ff69b4; }
            }

            @keyframes fadeBlink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }

            .shining-blink {
              animation: colorBlink 3s infinite ease-in-out, fadeBlink 3s infinite ease-in-out;
              font-weight: 800;
            }

            .gradient-animate {
              background: linear-gradient(270deg, #ff69b4, #00bfff, #ff69b4);
              background-size: 600% 600%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradientShift 6s ease infinite;
            }

            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>

        {/* Navbar */}
        <nav className="bg-black shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <ul className="flex space-x-8 justify-center">
              <li>
                <Link
                  to="/"
                  className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-history"
                  className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition"
                >
                  Consumer Purchase History
                </Link>
              </li>
              <li>
                <Link
                  to="/verify-product"
                  className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition"
                >
                  Product Verification
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Typing Title */}
        <div className="text-center mt-12 px-4">
          <h1 className="text-5xl font-extrabold leading-tight h-20 gradient-animate">
            {displayText}
            <span className="animate-pulse text-white">|</span>
          </h1>
          <p className="text-xl text-white mt-2">through Blockchain</p>
        </div>

        {/* Consumer Info */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl shining-blink mb-4">Welcome, Consumer</h2>
          <h3 className="text-lg text-white">
            Use the navigation bar above to verify products or view your purchase history.
          </h3>
          <div className="mt-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1532/1532637.png"
              alt="Consumer Icon"
              className="mx-auto w-24 h-24 opacity-90"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
