import React from 'react';
import { useNavigate } from 'react-router-dom';
import UploadScreenshots from '../components/UploadScreenshots/UploadScreenshots';
import { useAppContext } from '../context/AppContext';

const Dashboard = () => {
    const navigate = useNavigate();
    const { addScreen } = useAppContext();

    const handleUploadComplete = (data) => {
        addScreen(data);
        navigate('/details');
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold mb-4 text-gradient">
                        InsightFlow
                    </h1>
                    <p className="text-xl text-gray-600">
                        Transform your UI analysis with AI-powered insights
                    </p>
                </div>

                <div className="glass-panel rounded-3xl p-8 sm:p-12">
                    <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4 border-gray-100">
                        Start New Comparison
                    </h2>
                    <UploadScreenshots onUploadComplete={handleUploadComplete} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard