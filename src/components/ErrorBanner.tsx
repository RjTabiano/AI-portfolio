import React from 'react';

interface ErrorBannerProps {
  message: string;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => (
  <div className="bg-red-800 border border-red-700 text-red-200 px-4 py-3 rounded relative my-2" role="alert">
    <strong className="font-bold">Error: </strong>
    <span className="block sm:inline">{message}</span>
  </div>
);

export default ErrorBanner; 