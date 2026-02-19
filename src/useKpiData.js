import { useState, useEffect } from 'react';
import { getKpiData } from '../services/kpiService';

export const useKpiData = (kpiId) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Do nothing if there is no kpiId
        if (!kpiId) {
            setData(null);
            return;
        }

        const fetchData = async () => {
            // Reset states for new fetch
            setLoading(true);
            setError(null);
            setData(null);

            try {
                const result = await getKpiData(kpiId);
                setData(result);
            } catch (err) {
                console.error(`Failed to fetch KPI data for ${kpiId}:`, err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [kpiId]); // Rerun effect if kpiId changes

    return { data, loading, error };
};