import React, { useState } from 'react';
import { uploadScreenshots } from '../../services/api';
import Button from '../UI/Button';
import "./UploadScreenshots.css";

const UploadScreenshots = ({ onUploadComplete }) => {
    const [uploading, setUploading] = useState(false);
    const [files, setFiles] = useState({ current: null, revamped: null });
    const [previews, setPreviews] = useState({ current: null, revamped: null });

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            setFiles(prev => ({ ...prev, [type]: file }));
            setPreviews(prev => ({ ...prev, [type]: URL.createObjectURL(file) }));
        }
    };

    const handleUpload = async () => {
        if (!files.current || !files.revamped) return;

        setUploading(true);
        try {
            const formData = new FormData();
            formData.append('current', files.current);
            formData.append('revamped', files.revamped);

            const result = await uploadScreenshots(formData);

            // Use previews if API returns mock URLs, or use result URLs
            const screenData = {
                ...result,
                currentUI: { url: previews.current || result.currentUI.url },
                revampedUI: { url: previews.revamped || result.revampedUI.url }
            };

            onUploadComplete(screenData);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="upload-area">
                    <h3 className="font-semibold mb-2">Current UI</h3>
                    {previews.current ? (
                        <img src={previews.current} alt="Current UI" className="max-h-48 mx-auto mb-2" />
                    ) : (
                        <input type="file" onChange={(e) => handleFileChange(e, 'current')} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    )}
                </div>
                <div className="upload-area">
                    <h3 className="font-semibold mb-2">Revamped UI</h3>
                    {previews.revamped ? (
                        <img src={previews.revamped} alt="Revamped UI" className="max-h-48 mx-auto mb-2" />
                    ) : (
                        <input type="file" onChange={(e) => handleFileChange(e, 'revamped')} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    )}
                </div>
            </div>
            <Button onClick={handleUpload} disabled={uploading || !files.current || !files.revamped}>
                {uploading ? 'Uploading...' : 'Upload & Compare'}
            </Button>
        </div>
    );
};

export default UploadScreenshots;