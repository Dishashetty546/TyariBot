import React, { useState } from 'react';

const SignUp = ({ setCurrentPage }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      setError('File size should be less than 2MB.');
    } else {
      setError('');
      setProfilePhoto(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!fullName || !email || !password) {
      setError('Please fill all required fields.');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      setLoading(false);
      return;
    }

    try {
      // Simulated API request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Signup successful!');
    } catch (err) {
      setError('Signup failed. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Your Account</h2>

      {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="text-center">
          <label className="cursor-pointer inline-block">
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden shadow">
              {profilePhoto ? (
                <img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="Profile Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-500 text-sm">Upload</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
          />
        </div>

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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-4">
        Already have an account?{' '}
        <button
          className="text-blue-600 hover:underline"
          onClick={() => setCurrentPage && setCurrentPage('login')}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUp;
