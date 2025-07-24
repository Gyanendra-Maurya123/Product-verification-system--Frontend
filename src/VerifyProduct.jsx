import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Link } from "react-router-dom";

const VerifyProduct = () => {
  const [qrResult, setQrResult] = useState("");
  const [consumerCode, setConsumerCode] = useState("");
  const [productSN, setProductSN] = useState("");
  const [verificationResult, setVerificationResult] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [inputError, setInputError] = useState("");
  const resultRef = useRef(null);

  const fullText = "Product Verification System";

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        index = 0;
        setDisplayText("");
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    setVerificationResult(
      `Product ${productSN || "N/A"} is ${
        consumerCode === "123456" ? "GENUINE ✅" : "FAKE ❌"
      }`
    );
    setUserAddress("0x123...abc");

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <style>
        {`
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

      {/* Background */}
      <div className="min-h-screen bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 text-white">

        {/* Navbar */}
        <nav className="bg-black py-5 shadow-md sticky top-0 z-50">
          <div className="mx-auto max-w-screen-xl px-4">
            <div className="flex justify-center">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/manufacturer" className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition">
                    Manufacturer
                  </Link>
                </li>
                <li>
                  <Link to="/seller" className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition">
                    Seller
                  </Link>
                </li>
                <li>
                  <Link to="/consumer" className="text-white font-medium hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 px-4 py-2 transition">
                    Consumer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Animated Header */}
        <header className="py-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold blinking-cursor">
            <span className="bg-gradient-to-r from-yellow-400 via-white to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
              {displayText}
            </span>
          </h1>
          <p className="text-sm mt-2 text-white font-bold">through Blockchain</p>
        </header>

        {/* QR Form Section */}
        <section className="py-10">
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-xl text-gray-800 border border-white/30">
            <h2 className="text-2xl font-bold mb-6 animate-glow-multicolor text-center">Verify Products</h2>

            <div className="flex justify-center mb-6">
              <div id="qr-reader" className="w-72" />
            </div>

            <div className="mb-6">
              <label htmlFor="productSN" className="block font-medium text-gray-800 mb-1">
                Product SN:
              </label>
              <input
                type="text"
                id="productSN"
                className="w-full border p-2 rounded mb-4 text-black"
                value={productSN}
                disabled
              />

              <label htmlFor="consumerCode" className="block font-medium text-gray-800 mb-1">
                Consumer Code:
              </label>
              <input
                type="text"
                id="consumerCode"
                className="w-full border p-2 rounded text-black"
                value={consumerCode}
                onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setConsumerCode(value);
                setInputError("");
              } else {
                setInputError("Consumer code cannot be alphabet");

                // Automatically clear error after 2 seconds
                setTimeout(() => {
                  setInputError("");
                }, 2000);
              }
            }}

                placeholder="Enter Consumer Code"
              />
              {inputError && (
                <p className="text-red-300 text-sm mt-1">{inputError}</p>
              )}
            </div>


            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded w-full"
              onClick={(e) => handleVerify(e)}
              disabled={inputError !== ""}
            >
              Get Product Status
            </button>
          </div>
        </section>

        {/* Result Section */}
        <section className="pb-20" ref={resultRef}>
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-xl text-gray-800 border border-white/30">
            <h2 className="text-xl font-bold mb-4">Is the product fake or genuine?</h2>

            <table className="table-auto w-full mb-6 border border-gray-300 bg-white text-black rounded overflow-hidden">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left px-4 py-2">Product Verification Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="logdata" className="px-4 py-3 text-lg text-green-600 font-semibold">
                    {verificationResult || "Awaiting verification..."}
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-center">
              Your address is <b>{userAddress || "Not Connected"}</b>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VerifyProduct;
