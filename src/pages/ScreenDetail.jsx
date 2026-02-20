import React, { useState } from 'react';
import ScreenComparison from '../components/ScreenComparison/ScreenComparison';
import ThoughtProcessEditor from '../components/ThoughtProcessEditor/ThoughtProcessEditor';
import KpiCard from '../components/KpiCard/KpiCard';
import KpiModal from '../components/KpiModal/KpiModal';
import { useAppContext } from '../context/AppContext';
import { useKpiData } from '../hooks/useKpiData';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const ScreenDetail = () => {
    const { currentScreen } = useAppContext();
    const { kpis } = useKpiData(currentScreen?.id);
    const [selectedKpi, setSelectedKpi] = useState(null);
    const navigate = useNavigate();

    if (!currentScreen) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-gray-600 mb-4">No screen selected.</p>
                    <Button onClick={() => navigate('/')}>Go to Dashboard</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex justify-between items-center glass-panel p-6 rounded-2xl">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Analysis & Insights</h1>
                        <p className="text-gray-500 mt-1">Reviewing changes for {currentScreen.id}</p>
                    </div>
                    <Button variant="outline" onClick={() => navigate('/')}>New Comparison</Button>
                </header>

                <section>
                    <ScreenComparison currentUrl={currentScreen.currentUI.url} revampedUrl={currentScreen.revampedUI.url} />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Performance Indicators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {kpis.map(kpi => (
                            <KpiCard key={kpi.id} kpi={kpi} onClick={setSelectedKpi} />
                        ))}
                    </div>
                </section>

                <section>
                    <ThoughtProcessEditor />
                </section>

                <KpiModal kpi={selectedKpi} isOpen={!!selectedKpi} onClose={() => setSelectedKpi(null)} />
            </div>
        </div>
    );
};

export default ScreenDetail;