import React, { useState } from 'react';
import Modal from '../UI/Modal';
import TrendChart from '../charts/TrendChart';
import PieChart from '../charts/PieChart';
import './KpiModal.css';

const KpiModal = ({ kpi, isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('trend');

    if (!kpi) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={kpi.name}>
            <div className="kpi-modal-content">
                <div className="kpi-modal-tabs">
                    <button
                        className={`kpi-modal-tab ${activeTab === 'trend' ? 'active' : ''}`}
                        onClick={() => setActiveTab('trend')}
                    >
                        Trend Analysis
                    </button>
                    {kpi.showSegmentDistribution && (
                        <button
                            className={`kpi-modal-tab ${activeTab === 'segment' ? 'active' : ''}`}
                            onClick={() => setActiveTab('segment')}
                        >
                            Distribution
                        </button>
                    )}
                </div>
                <div className="chart-container">
                    {activeTab === 'trend' ? (
                        <TrendChart data={kpi.trendData} />
                    ) : (
                        <PieChart data={kpi.segmentData} />
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default KpiModal