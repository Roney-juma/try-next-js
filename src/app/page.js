"use client";

import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Logic to add email to the waitlist (e.g., API call)
      setMessage("Thank you for joining the waitlist!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="absolute top-4 left-4">
        <h1 className="text-blue-600 text-xl font-bold">crowdcoin</h1>
      </div>
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-blue-600 text-lg">Something great is on the way</h1>
        <h2 className="text-4xl font-bold text-blue-700 mt-2">Coming Soon</h2>
        <p className="text-gray-600 mt-4">Join the waitlist</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
        {message && <p className="text-green-600 mt-4">{message}</p>}
      </div>
    </div>
  );
}
