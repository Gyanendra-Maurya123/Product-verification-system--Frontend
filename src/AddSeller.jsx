import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddSeller = () => {
  const [formData, setFormData] = useState({
    SellerName: "",
    SellerBrand: "",
    SellerCode: "",
    SellerPhoneNumber: "",
    SellerManager: "",
    SellerAddress: "",
    ManufacturerId: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Seller:", formData);
    // TODO: Connect to backend/blockchain
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-white/30">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 drop-shadow-md">
          🛍️ Register New Seller
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: "SellerName", label: "Seller Name" },
              { id: "SellerBrand", label: "Seller Brand" },
              { id: "SellerCode", label: "Seller Code" },
              { id: "SellerPhoneNumber", label: "Phone Number" },
              { id: "SellerManager", label: "Seller Manager" },
              { id: "SellerAddress", label: "Seller Address" },
            ].map(({ id, label }) => (
              <div key={id}>
                <label htmlFor={id} className="block mb-2 text-gray-900 font-medium">
                  {label}
                </label>
                <input
                  type="text"
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label htmlFor="ManufacturerId" className="block mb-2 text-gray-900 font-medium">
                Manufacturer ID
              </label>
              <input
                type="text"
                id="ManufacturerId"
                name="ManufacturerId"
                value={formData.ManufacturerId}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition duration-300"
            >
              <FaPlusCircle /> Add Seller
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
