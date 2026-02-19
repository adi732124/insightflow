import React, { createContext, useState, } from 'react';

const AppContext = createContext();

// export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [screens, setScreens] = useState([
        {
            id: '1',
            screen_name: "Dashboard Overview",
            current_ui_url: "https://via.placeholder.com/600x400?text=Current+UI",
            revamped_ui_url: "https://via.placeholder.com/600x400?text=Revamped+UI",
            thought_process: {
                problem_context: "Users find it hard to locate key metrics.",
                user_insight: "Users want a quick summary at the top.",
                product_decision: "Introduce a KPI ribbon at the top.",
                expected_impact: ["Reduced time to insight", "Higher engagement"]
            },
            kpis: [
                {
                    id: 'k1',
                    name: "Revenue",
                    type: "monetary",
                    current: 100000,
                    previous: 85000,
                    growth: 17.65,
                    trendData: [
                        { label: 'Jan', value: 80000 },
                        { label: 'Feb', value: 85000 },
                        { label: 'Mar', value: 100000 }
                    ],
                    segmentData: [
                        { name: "State A", value: 40000 },
                        { name: "State B", value: 60000 }
                    ],
                    showTrend: true,
                    showSegmentDistribution: true
                },
                {
                    id: 'k2',
                    name: "Active Subscriptions",
                    type: "count",
                    current: 1200,
                    previous: 1150,
                    growth: 4.35,
                    trendData: [
                        { label: 'Jan', value: 1100 },
                        { label: 'Feb', value: 1150 },
                        { label: 'Mar', value: 1200 }
                    ],
                    showTrend: true,
                    showSegmentDistribution: false
                }
            ]
        }
    ]);

    const addScreen = (screen) => {
        setScreens([...screens, { ...screen, id: Date.now().toString() }]);
    };

    return (
        <AppContext.Provider value={{ screens, addScreen }}>
            {children}
        </AppContext.Provider>
    );
};
