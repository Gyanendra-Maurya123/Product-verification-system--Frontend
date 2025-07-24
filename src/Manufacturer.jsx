import { Link } from "react-router-dom";

export default function Manufacturer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      {/* Header Section */}
      <header className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white text-center md:text-left">
            Product Verification System <span className="block md:inline text-sm font-light">through Blockchain</span>
          </Link>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center md:justify-center gap-4 py-4 text-sm md:text-base">
            <li><Link to="/" className="text-white hover:text-yellow-400">Home</Link></li>
            <li><Link to="/add-product" className="text-white hover:text-yellow-400">Add Product</Link></li>
            <li><Link to="/add-seller" className="text-white hover:text-yellow-400">Add Seller</Link></li>
            <li><Link to="/sell-product-seller" className="text-white hover:text-yellow-400">Sell Product To Seller</Link></li>
            <li><Link to="/query-seller" className="text-white hover:text-yellow-400">Query Seller</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Manufacturer</h2>
        <h3 className="text-xl font-light">Go to navigation bar to perform operations.</h3>
      </main>
    </div>
  );
}
