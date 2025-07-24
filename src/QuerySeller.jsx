import React, { useState } from 'react';

const QuerySeller = () => {
  const [sellerCode, setSellerCode] = useState('');
  const [productList, setProductList] = useState([]);
  const [userAddress, setUserAddress] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/seller-products?sellerCode=${sellerCode}`);
      const data = await response.json();
      setProductList(data.products);
      setUserAddress(data.address);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">Product Verification System <span className="text-yellow-400">through Blockchain</span></a>
          <ul className="flex space-x-6">
            <li><a className="hover:text-yellow-400" href="/">Home</a></li>
            <li><a className="hover:text-yellow-400" href="/manufacturer">Manufacturer</a></li>
            <li><a className="hover:text-yellow-400" href="/seller">Seller</a></li>
            <li><a className="hover:text-yellow-400" href="/consumer">Consumer</a></li>
          </ul>
        </div>
      </nav>

      {/* Input Section */}
      <section className="max-w-4xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Products for Sale with the Seller</h2>
        <div className="mb-4">
          <label htmlFor="sellerCode" className="block text-gray-700 font-medium mb-1">Seller Code</label>
          <input
            id="sellerCode"
            type="text"
            value={sellerCode}
            onChange={(e) => setSellerCode(e.target.value)}
            placeholder="Enter Seller Code"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded transition"
        >
          Submit
        </button>
      </section>

      {/* Product Table */}
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Product ID</th>
                <th className="px-4 py-2 border">Serial Number</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Brand</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {productList.length > 0 ? (
                productList.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="px-4 py-2 border">{item.productId}</td>
                    <td className="px-4 py-2 border">{item.serialNumber}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.brand}</td>
                    <td className="px-4 py-2 border">{item.price}</td>
                    <td className="px-4 py-2 border">{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center px-4 py-4 text-gray-500">
                    No product data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* User Address */}
        {userAddress && (
          <div className="text-center mt-6 text-lg">
            <p>Your address is <span className="font-bold">{userAddress}</span></p>
          </div>
        )}
      </section>
    </div>
  );
};

export default QuerySeller;
