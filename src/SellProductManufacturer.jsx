import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Link } from 'react-router-dom';

const SellProductManufacturer = () => {
  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });

    const onScanSuccess = (decodedText) => {
      const audio = new Audio('/beep.wav');
      audio.play();

      document.getElementById('qr-reader-results').innerText = decodedText;
      document.getElementById('productSN').value = decodedText;
    };

    qrScanner.render(onScanSuccess);

    // Cleanup on unmount
    return () => {
      qrScanner.clear().catch(error => console.error('QR Scanner cleanup failed', error));
    };
  }, []);

  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Verification System <span className="block text-sm text-gray-500">through Blockchain</span>
          </h1>
        </div>
      </header>

      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
              <Link to="/manufacturer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Manufacturer</Link>
              <Link to="/seller" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Seller</Link>
              <Link to="/consumer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Consumer</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sell Product to Seller</h2>

          <div className="flex justify-center mb-6">
            <div id="qr-reader" className="w-72" />
          </div>
          <div id="qr-reader-results" className="text-center text-lg font-semibold text-green-600 mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="productSN" className="block text-gray-700 font-medium mb-1">Product SN:</label>
              <input type="text" id="productSN" className="w-full p-2 border rounded" disabled />
            </div>
            <div>
              <label htmlFor="sellerCode" className="block text-gray-700 font-medium mb-1">Seller Code:</label>
              <input type="text" id="sellerCode" className="w-full p-2 border rounded" />
            </div>
          </div>

          <button id="register" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded">
            Sell to Seller
          </button>
        </div>
      </section>
    </>
  );
};

export default SellProductManufacturer;
