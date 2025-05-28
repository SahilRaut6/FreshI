import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
      <p className="text-gray-600">Loading product information...</p>
    </div>
  );
};

export default LoadingSpinner;