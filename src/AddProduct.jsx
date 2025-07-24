import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [manufacturerID, setManufacturerID] = useState("");
  const [productName, setProductName] = useState("");
  const [productSN, setProductSN] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [qrSrc, setQrSrc] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!manufacturerID || !productName || !productSN || !productBrand || !productPrice) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/add-product", {
        manufacturerID,
        productName,
        productSN,
        productBrand,
        productPrice,
      });

      if (res.data.success) {
        const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productSN}`;
        setQrSrc(src);
        setShowQR(true);
        setMessage("✅ Product added successfully!");
      } else {
        setMessage("❌ Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error adding product.");
    }
  };

  const saveImage = () => {
    const a = document.createElement("a");
    a.href = qrSrc;
    a.download = `${productSN}_qr.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setShowQR(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1">Manufacturer ID</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={manufacturerID}
            onChange={(e) => setManufacturerID(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Product Name</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Product SN</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={productSN}
            onChange={(e) => setProductSN(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Product Brand</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1">Product Price</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          Add the Product
        </button>
        {message && <p className="mt-4 text-center text-lg font-medium">{message}</p>}
      </div>

      {showQR && (
        <div className="text-center mt-6">
          <img src={qrSrc} alt="QR Code" className="mx-auto mb-4" />
          <button
            onClick={saveImage}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
