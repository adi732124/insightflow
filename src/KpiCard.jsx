import React from 'react';
import { formatNumber, formatCurrency, formatPercentage } from '../../utils/format';

const KpiCard = ({ kpi, onClick }) => {
    const formatValue = kpi.type === 'monetary' ? formatCurrency : formatNumber;

    return (
        <div
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
            onClick={() => onClick(kpi)}
        >
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{kpi.name}</h4>
            <div className="mt-2 flex items-baseline">
                <span className="text-2xl font-semibold text-gray-900">
                    {formatValue(kpi.current)}
                </span>
                <span className={`ml-2 text-sm font-medium ${kpi.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercentage(kpi.growth)}
                </span>
            </div>
            <div className="mt-4 h-10 w-full bg-gray-50 rounded overflow-hidden relative">
                <svg className="h-full w-full" preserveAspectRatio="none">
                    <polyline
                        points={kpi.trendData.map((d, i) => `${(i / (kpi.trendData.length - 1)) * 100},${100 - (d.value / Math.max(...kpi.trendData.map(x => x.value))) * 100}`).join(' ')}
                        fill="none"
                        stroke={kpi.growth >= 0 ? "#10B981" : "#EF4444"}
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default KpiCard;