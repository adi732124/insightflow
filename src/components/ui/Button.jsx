import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
    const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-indigo-500/30",
        secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
        outline: "border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;