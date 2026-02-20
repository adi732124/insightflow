import React, { useState } from 'react';
import ScreenComparison from '../components/ScreenComparison/ScreenComparison';
import ThoughtProcessEditor from '../components/ThoughtProcessEditor/ThoughtProcessEditor';
import KpiCard from '../components/KpiCard/KpiCard';
import KpiModal from '../components/KpiModal/KpiModal';
import { useAppContext } from '../context/AppContext';
import { useKpiData } from '../hooks/useKpiData';

const ScreenDetail = () => {
    const { currentScreen } = useAppContext();
    const { kpis } = useKpiData(currentScreen?.id);
    const [selectedKpi, setSelectedKpi] = useState(null);

    if (!currentScreen) return <div className="p-6">No screen selected. Please upload screenshots first.</div>;

    return (
        <div className="container mx-auto p-6 space-y-8">
            <header>
                <h1 className="text-2xl font-bold">Analysis & Insights</h1>
            </header>

            <section>
                <ScreenComparison currentUrl={currentScreen.currentUI.url} revampedUrl={currentScreen.revampedUI.url} />
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {kpis.map(kpi => (
                    <KpiCard key={kpi.id} kpi={kpi} onClick={setSelectedKpi} />
                ))}
            </section>

            <section>
                <ThoughtProcessEditor />
            </section>

            <KpiModal kpi={selectedKpi} isOpen={!!selectedKpi} onClose={() => setSelectedKpi(null)} />
        </div>
    );
};

export default ScreenDetail;