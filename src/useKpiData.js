import { useState, useEffect } from 'react';
import { getKpiData } from '../services/kpiService';

export const useKpiData = (kpiId) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (kpiId) {
            setLoading(true);
            getKpiData(kpiId).then(res => {
                setData(res);
                setLoading(false);
            });
        }
    }, [kpiId]);

    return { data, loading };
};