import React from 'react';

const ScreenComparison = ({ currentUI, revampedUI }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 text-center">Current UI</h3>
                <div className="border rounded-lg overflow-hidden shadow-sm bg-gray-100 min-h-[300px] flex items-center justify-center">
                    {currentUI ? (
                        <img src={currentUI} alt="Current UI" className="w-full h-auto" />
                    ) : (
                        <span className="text-gray-400">No image</span>
                    )}
                </div>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 text-center">Revamped UI</h3>
                <div className="border rounded-lg overflow-hidden shadow-sm bg-gray-100 min-h-[300px] flex items-center justify-center">
                    {revampedUI ? (
                        <img src={revampedUI} alt="Revamped UI" className="w-full h-auto" />
                    ) : (
                        <span className="text-gray-400">No image</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScreenComparison;