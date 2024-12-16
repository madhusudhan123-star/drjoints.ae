import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative">
                {/* Single blue spinner */}
                <div className="w-16 h-16 border-4 border-blue-600 border-solid rounded-full animate-spin border-t-transparent"></div>
                {/* Loading text */}
                <div className="mt-4 text-blue-600 font-semibold text-center">Loading...</div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
