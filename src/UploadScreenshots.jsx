import React, { useState } from 'react';
import Button from '../UI/Button';

const UploadScreenshots = ({ onUpload }) => {
    const [currentUI, setCurrentUI] = useState(null);
    const [revampedUI, setRevampedUI] = useState(null);

    const handleFileChange = (e, setter) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setter(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentUI && revampedUI) {
            onUpload({ currentUI, revampedUI });
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Upload Screenshots</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current UI</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, setCurrentUI)}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {currentUI && <img src={currentUI} alt="Current UI Preview" className="mt-2 h-32 object-cover rounded border" />}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Revamped UI</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, setRevampedUI)}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {revampedUI && <img src={revampedUI} alt="Revamped UI Preview" className="mt-2 h-32 object-cover rounded border" />}
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit" disabled={!currentUI || !revampedUI}>
                        Process Screenshots
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UploadScreenshots;