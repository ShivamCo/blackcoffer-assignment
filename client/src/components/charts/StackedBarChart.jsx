
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { getAllCountryName, getCountryData } from '../../helpers/helpers';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const StackedBarChart = () => {

    const [countryChartData, setCountryChartData] = useState([])
    const [selectedCountry, setSelectedCountry] = useState("Mexico")
    const [allContries, setAllContries] = useState([])


    const selectCountry = (event) => {

        setSelectedCountry(event.target.value)

    }

    const countryData = async () => {
        const response = await getCountryData({ countryName: selectedCountry })
        setCountryChartData(response)
    }


    useEffect(() => {
        countryData()
    }, [selectedCountry])

    useEffect(() => {

        const getAllContries = async () => {
            const response = await getAllCountryName()
            setAllContries(response)
        }
        getAllContries()

    }, [])

    const startYears = countryChartData.map(item => item.source == "" ? "N/A" : item.source.slice(0, 10));

    const chartData = {
        labels: startYears, // Labels are individual start years from the data
        datasets: [
            {
                label: 'Intensity',
                data: countryChartData.map(item => item.intensity),
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                stack: 'stack1',
            },
            {
                label: 'Relevance',
                data: countryChartData.map(item => item.relevance),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                stack: 'stack1',
            },
            {
                label: 'Likelihood',
                data: countryChartData.map(item => item.likelihood),
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

    return (
        <div className='flex items-center flex-col' >
            <select className=" w-min text-white  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                onChange={selectCountry} name="selectedCountry" id="country">
                {allContries?.map((i, index) =>
                    <option
                        className='py-2 text-sm text-white'
                        key={index}
                        value={i}
                        selected={i === "Mexico"}
                    >
                        {i}
                    </option>
                )}
            </select>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default StackedBarChart;
