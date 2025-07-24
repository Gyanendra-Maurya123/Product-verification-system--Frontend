import { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, userName, password })
    });

    if (response.ok) {
      alert('✅ Registration Successful');
      setFirstName('');
      setLastName('');
      setEmail('');
      setUserName('');
      setPassword('');
    } else {
      alert('❌ Registration Failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-600 to-yellow-400">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Product Verification Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm text-gray-600">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First name"
                className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last name"
                className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Enter username"
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              className="w-full p-3 mt-1 border-2 border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-red-50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white mt-4 py-3 rounded-md hover:bg-red-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-red-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
