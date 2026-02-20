export const getKpiData = async (screenId) => {
    // Simulating fetching KPIs for a specific screen
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'kpi-1',
                    name: "Revenue",
                    type: "monetary",
                    current: 100000,
                    previous: 85000,
                    growth: 17.65,
                    trendData: [
                        { name: 'Jan', value: 80000 },
                        { name: 'Feb', value: 85000 },
                        { name: 'Mar', value: 100000 },
                        { name: 'Apr', value: 95000 },
                        { name: 'May', value: 110000 }
                    ],
                    segmentData: [
                        { name: "New Users", value: 40000 },
                        { name: "Returning", value: 60000 }
                    ],
                    showTrend: true,
                    showSegmentDistribution: true
                },
                {
                    id: 'kpi-2',
                    name: "Active Subscriptions",
                    type: "count",
                    current: 1200,
                    previous: 1150,
                    growth: 4.35,
                    trendData: [
                        { name: 'Jan', value: 1100 },
                        { name: 'Feb', value: 1150 },
                        { name: 'Mar', value: 1200 },
                        { name: 'Apr', value: 1210 },
                        { name: 'May', value: 1250 }
                    ],
                    segmentData: [],
                    showTrend: true,
                    showSegmentDistribution: false
                }
            ]);
        }, 500);
    });
};