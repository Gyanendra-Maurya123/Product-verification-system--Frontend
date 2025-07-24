import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const SellProductSeller = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    });

    scanner.render((decodedText, decodedResult) => {
      const audio = new Audio("/beep.wav");
      audio.play();
      document.getElementById("qr-reader-results").innerHTML = decodedText;
      document.getElementById("productSN").value = decodedText;
    });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Sell Product to Consumer</h2>

      <div className="flex justify-center mb-4">
        <div id="qr-reader" className="w-72" />
      </div>
      <div id="qr-reader-results" className="text-center text-sm text-gray-600 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Product SN:</label>
          <input
            type="text"
            id="productSN"
            name="productSN"
            disabled
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Consumer Code:</label>
          <input
            type="text"
            id="consumerCode"
            name="consumerCode"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          id="register"
          className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Sell to Consumer
        </button>
      </div>
    </div>
  );
};

export default SellProductSeller;
