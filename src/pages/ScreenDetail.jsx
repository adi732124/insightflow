import React, { useState } from 'react';
import ThoughtProcessEditor from '../components/thoughtprocesseditor/ThoughtProcessEditor';
import KpiCard from '../components/kpicard/KpiCard';
import { useAppContext } from '../context/AppContext';
import { useKpiData } from '../hooks/useKpiData';
import KpiModal from '../components/KpiModal/KpiModal';

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