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
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">InsightFlow Dashboard</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Start New Comparison</h2>
                <UploadScreenshots onUploadComplete={handleUploadComplete} />
            </div>
        </div>
    );
}

export default Dashboard