import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const labels = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();

    for (let i = 5; i >= 0; i--) {
        const monthIndex = (today.getMonth() - i + 12) % 12;
        labels.push(months[monthIndex]);
    }

    // Create a vertical gradient for the bars
    const createGradient = (ctx, chartArea) => {
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, '#b91c1c'); // deep red at bottom
        gradient.addColorStop(1, '#f87171'); // lighter red on top
        return gradient;
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Research & Innovations',
                data: [45, 67, 89, 34, 76, 90],
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        // This case happens on initial chart load
                        return '#560606';
                    }
                    return createGradient(ctx, chartArea);
                },
                borderRadius: 8,
                maxBarThickness: 40,
                hoverBackgroundColor: '#7f1d1d',
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000,
            easing: 'easeOutQuart',
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#560606',
                    font: {
                        size: 14,
                        weight: '600',
                    },
                },
            },
            title: {
                display: true,
                text: 'Last 6 Months Research & Innovation',
                color: '#560606',
                font: {
                    size: 20,
                    weight: '700',
                },
                padding: {
                    top: 10,
                    bottom: 30,
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#560606',
                titleFont: {
                    size: 16,
                    weight: '700',
                },
                bodyFont: {
                    size: 14,
                },
                cornerRadius: 6,
                padding: 10,
                displayColors: false,
                intersect: false,
                mode: 'nearest',
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#6b7280', // Tailwind gray-500
                    font: {
                        size: 14,
                        weight: '600',
                    },
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 14,
                        weight: '600',
                    },
                    stepSize: 20,
                },
                grid: {
                    color: '#e5e7eb', // Tailwind gray-200
                    borderDash: [5, 5],
                },
            },
        },
    };

    return (
        <div style={{ height: '350px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
