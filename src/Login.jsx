import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userNameorEmail, setusernameoremail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({ userNameorEmail, password })
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      seterror(data.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 overflow-hidden">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md animate-fade-in-up">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Product Verification Login
        </h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="usernameLogin" className="text-sm text-gray-600">
            Username or Email
          </label>
          <input
            type="text"
            id="usernameLogin"
            required
            value={userNameorEmail}
            onChange={(e) => setusernameoremail(e.target.value)}
            placeholder="Enter your username or email"
            className="w-full px-4 py-3 mt-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 transition"
          />

          <label htmlFor="passwordLogin" className="text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="passwordLogin"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 mt-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
