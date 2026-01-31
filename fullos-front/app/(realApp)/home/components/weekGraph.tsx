'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import GraphLegend from './graphLegend';

type MultiLineChartProps = {
    values: number[][];
};

export default function MultiLineChart({ values }: MultiLineChartProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(canvasRef.current, {
            type: 'line',
            data: {
                labels: values[0].map((_, i) => i),
                datasets: values.map((dataset, index) => ({
                    data: dataset,
                    borderWidth: 2,
                    fill: false,
                    tension: 0,
                    pointRadius: 0,
                    borderColor: [
                        '#2563eb',
                        '#16a34a',
                        '#dc2626',
                    ][index],
                })),
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },

                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                },
            },
        });

        return () => {
            chartRef.current?.destroy();
        };
    }, [values]);

    return (
        <div className="mt-9 mb-12 md:m-0">
            <h2 className="text-lg font-lao mb-2">Estatistícas semanais</h2>

            <div className="h-32 md:h-34">
                <canvas ref={canvasRef} />
            </div>

            <div className="flex justify-between mt-2 lg:mt-4">
                <GraphLegend name="Adonias" color="bg-[#2563eb]" />
                <GraphLegend name="Elias" color="bg-[#16a34a]" />
                <GraphLegend name="João" color="bg-[#dc2626]" />
            </div>
        </div>

    );
}
