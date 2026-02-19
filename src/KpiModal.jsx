import React, { useState } from 'react';
import Modal from '../UI/Modal';
import TrendChart from '../charts/TrendChart';
import PieChart from '../charts/PieChart';
import { formatNumber, formatCurrency, formatPercentage } from '../../utils/format';

const KpiModal = ({ isOpen, onClose, kpi }) => {
    const [activeTab, setActiveTab] = useState('trend');

    if (!kpi) return null;

    const formatValue = kpi.type === 'monetary' ? formatCurrency : formatNumber;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`${kpi.name} Drilldown`}>
            <div className="mb-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded">
                    <p className="text-sm text-gray-500">Current</p>
                    <p className="text-xl font-bold">{formatValue(kpi.current)}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                    <p className="text-sm text-gray-500">Previous</p>
                    <p className="text-xl font-bold">{formatValue(kpi.previous)}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                    <p className="text-sm text-gray-500">Growth</p>
                    <p className={`text-xl font-bold ${kpi.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatPercentage(kpi.growth)}
                    </p>
                </div>
            </div>

            <div className="border-b mb-4">
                <nav className="-mb-px flex space-x-8">
                    {kpi.showTrend && (
                        <button
                            onClick={() => setActiveTab('trend')}
                            className={`pb-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'trend'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Trend Analysis
                        </button>
                    )}
                    {kpi.showSegmentDistribution && (
                        <button
                            onClick={() => setActiveTab('segment')}
                            className={`pb-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'segment'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Segment Distribution
                        </button>
                    )}
                </nav>
            </div>

            <div className="mt-4">
                {activeTab === 'trend' && kpi.showTrend && (
                    <TrendChart data={kpi.trendData} />
                )}
                {activeTab === 'segment' && kpi.showSegmentDistribution && (
                    <PieChart data={kpi.segmentData} />
                )}
            </div>
        </Modal>
    );
};

export default KpiModal;