import { useState, useEffect } from 'react';
import { getKpiData } from '../services/kpiService';

export const useKpiData = (screenId) => {
    const [kpis, setKpis] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getKpiData(screenId).then((data) => {
            setKpis(data);
            setLoading(false);
        });
    }, [screenId]);

    return { kpis, loading };
};