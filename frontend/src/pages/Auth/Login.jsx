import React, { useState } from 'react';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic frontend validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Dummy authentication logic (replace with real API/Firebase logic)
      if (email === 'test@example.com' && password === 'password123') {
        alert('Login successful!');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h2>

      {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-4">
        Don't have an account?{' '}
        <button
          className="text-blue-600 hover:underline"
          onClick={() => setCurrentPage && setCurrentPage('signup')}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
