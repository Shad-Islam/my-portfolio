import React from "react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-teal-500">404</h1>
      <p className="text-gray-400 mt-2">Page Not Found</p>
      <a href="/" className="mt-4 text-teal-500 hover:text-teal-400 transition">
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
