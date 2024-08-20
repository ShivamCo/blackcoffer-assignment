
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const StackedBarChart = () => {
    const data = [
        {
            end_year: '2022',
            intensity: 5,
            sector: 'Energy',
            topic: 'Renewable Energy',
            insight: 'Increase in renewable energy investments',
            url: 'http://example.com',
            region: 'North America',
            start_year: '2021',
            impact: 'High',
            added: '2022-01-01',
            published: '2022-01-02',
            country: 'USA',
            relevance: 7,
            pestle: 'Environmental',
            source: 'Industry Report',
            title: 'Renewable Energy Growth',
            likelihood: 4
        },
        {
            end_year: '2022',
            intensity: 3,
            sector: 'Technology',
            topic: 'AI Development',
            insight: 'Rapid growth in AI technology',
            url: 'http://example.com',
            region: 'Europe',
            start_year: '2021',
            impact: 'Medium',
            added: '2022-01-05',
            published: '2022-01-10',
            country: 'Germany',
            relevance: 8,
            pestle: 'Technological',
            source: 'Tech Report',
            title: 'AI Growth in Europe',
            likelihood: 5
        },
        {
            end_year: '2023',
            intensity: 7,
            sector: 'Energy',
            topic: 'Oil Prices',
            insight: 'Increase in oil prices',
            url: 'http://example.com',
            region: 'Asia',
            start_year: '2022',
            impact: 'High',
            added: '2023-02-20',
            published: '2023-02-21',
            country: 'China',
            relevance: 9,
            pestle: 'Economic',
            source: 'Market Analysis',
            title: 'Rising Oil Prices in Asia',
            likelihood: 6
        },
        // Add more data objects here as needed
    ];

    const regions = Array.from(new Set(data.map(item => item.region)));

    const chartData = {
        labels: regions,
        datasets: [
            {
                label: 'Intensity',
                data: regions.map(region => {
                    return data.filter(item => item.region === region)
                               .reduce((acc, curr) => acc + curr.intensity, 0);
                }),
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                stack: 'stack1',
            },
            {
                label: 'Relevance',
                data: regions.map(region => {
                    return data.filter(item => item.region === region)
                               .reduce((acc, curr) => acc + curr.relevance, 0);
                }),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                stack: 'stack1',
            },
            {
                label: 'Likelihood',
                data: regions.map(region => {
                    return data.filter(item => item.region === region)
                               .reduce((acc, curr) => acc + curr.likelihood, 0);
                }),
                backgroundColor: 'rgba(255, 206, 86, 0.7)',
                stack: 'stack1',
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Stacked Bar Chart for Intensity, Relevance, and Likelihood',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                display: true,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default StackedBarChart;
