export const uploadScreenshots = async (formData) => {
    // Simulating API call
    return new Promise(resolve => {
        setTimeout(() => {
            // In a real app, formData would be sent to backend
            // Here we just mock the response
            resolve({
                id: `screen-${Date.now()}`,
                currentUI: { url: 'https://placehold.co/600x400?text=Current+UI' },
                revampedUI: { url: 'https://placehold.co/600x400?text=Revamped+UI' },
                timestamp: new Date().toISOString()
            });
        }, 1000);
    });
};