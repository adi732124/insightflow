import React from 'react';
import './KpiCard.css';
import { formatCurrency, formatNumber } from '../../utils/format';

const KpiCard = ({ kpi, onClick }) => {
    const { name, current, previous, growth, type } = kpi;
    const isPositive = growth >= 0;
    const displayValue = type === 'monetary' ? formatCurrency(current) : formatNumber(current);
    const prevDisplayValue = type === 'monetary' ? formatCurrency(previous) : formatNumber(previous);

    return (
        <div className="kpi-card glass-panel" onClick={() => onClick(kpi)}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-600 font-medium text-sm uppercase tracking-wider">{name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {isPositive ? '↑' : '↓'} {Math.abs(growth)}%
                </span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">{displayValue}</div>
            <p className="text-sm text-gray-500">vs {prevDisplayValue} prev</p>
        </div>
    );
};

export default KpiCard