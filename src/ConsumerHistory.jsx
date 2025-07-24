import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ConsumerHistory = () => {
  const [consumerCode, setConsumerCode] = useState("");
  const [productLogs, setProductLogs] = useState([]);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Product Verification System";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index % (fullText.length + 1)));
      setIndex((prev) => prev + 1);
    }, 150);
    return () => clearInterval(interval);
  }, [index]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setConsumerCode(value);
      setError("");
    } else {
      setError("Consumer Code must be a number.");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const getProducts = () => {
    if (!consumerCode) {
      setError("Please enter your consumer code.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    const dummyData = [
      { sn: "P123", seller: "S456", manufacturer: "M789" },
      { sn: "P124", seller: "S457", manufacturer: "M790" },
    ];
    setProductLogs(dummyData);
    setAddress("0x123...abc");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white">
      
      {/* Navbar with centered links and yellow underline on hover */}
      <nav className="bg-black py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-center">
          <ul className="flex space-x-8">
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
                to="/seller"
                className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition"
              >
                Seller
              </Link>
            </li>
            <li>
              <Link
                to="/manufacturer"
                className="text-white font-semibold hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 px-4 py-2 transition"
              >
                Manufacturer
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Title Typing Animation */}
      <div className="text-center my-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          {displayText}
          <span className="animate-pulse text-white">|</span>
        </h1>
      </div>

      {/* Content Box */}
      <div className="max-w-5xl mx-auto p-6 bg-white bg-opacity-90 shadow-2xl rounded-xl mt-6 border border-blue-300 text-black">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center underline decoration-purple-500">
          Consumer Product History
        </h2>

        <div className="mb-6">
          <label htmlFor="consumerCode" className="block text-blue-700 font-semibold mb-2">
            Enter Your Consumer Code
          </label>
          <input
            type="text"
            id="consumerCode"
            className="w-full border border-blue-300 rounded-md px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
            value={consumerCode}
            onChange={handleInputChange}
            placeholder="e.g., 12345"
          />
          {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
        </div>

        <div className="text-center mb-10">
          <button
            onClick={getProducts}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold px-8 py-2 rounded-lg shadow-lg transition-all duration-300"
          >
            Get Products
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
            Products Purchased by You
          </h3>

          <div className="overflow-x-auto max-h-64 overflow-y-auto">
            <table className="min-w-full bg-white border border-blue-200 rounded-lg shadow-md text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left text-blue-800 font-medium">Product SN</th>
                  <th className="py-3 px-4 border-b text-left text-blue-800 font-medium">Seller Code</th>
                  <th className="py-3 px-4 border-b text-left text-blue-800 font-medium">Manufacturer Code</th>
                </tr>
              </thead>
              <tbody>
                {productLogs.map((log, index) => (
                  <tr key={index} className="hover:bg-purple-50">
                    <td className="py-3 px-4 border-b">{log.sn}</td>
                    <td className="py-3 px-4 border-b">{log.seller}</td>
                    <td className="py-3 px-4 border-b">{log.manufacturer}</td>
                  </tr>
                ))}
                {productLogs.length === 0 && (
                  <tr>
                    <td colSpan="3" className="py-4 px-4 text-center text-gray-500 italic">
                      No products found. Please enter your consumer code.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {address && (
            <div className="mt-6 text-center text-sm text-gray-700">
              Your blockchain address is:{" "}
              <span className="font-bold text-purple-700">{address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsumerHistory;
