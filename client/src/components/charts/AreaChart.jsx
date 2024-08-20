// AreaChart.js

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useEffect, useState } from 'react';
import { getAllCountryName, getCountryData } from '../../helpers/helpers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const AreaChart = () => {

  const [selectedCountry, setSelectCountry] = useState({

    countryOne: "Libya",
    countryTwo: "United Kingdom"

  });

  const [chartData, setChartData] = useState({
    countryOneData: [],
    countryTwoData: []
  });

  const [label, setLabel] = useState(Array.from({ length: chartData.countryOneData.length }, (_, i) => i + 1))
  const [allContries, setAllContries] = useState(null)

  //Country Data
  const countryData = async () => {

    const responseOne = await getCountryData({ countryName: selectedCountry.countryOne })
    const responseTwo = await getCountryData({ countryName: selectedCountry.countryTwo })

    setChartData({
      countryOneData: responseOne,
      countryTwoData: responseTwo
    })

  }


  const selectCountry = (event) => {
    console.log(event.target.value)
    setSelectCountry({ ...selectedCountry, [event.target.name]: event.target.value })

  }

  useEffect(() => {
    countryData()

  }, [selectedCountry])

  useEffect(() => {
    if (
      Array.from({ length: chartData.countryOneData.length }, (_, i) => i + 1)

      >

      Array.from({ length: chartData.countryTwoData.length }, (_, i) => i + 1)) {
      setLabel(Array.from({ length: chartData.countryOneData.length }, (_, i) => i + 1))
    } else {
      setLabel(Array.from({ length: chartData.countryTwoData.length }, (_, i) => i + 1))
    }
  }, [chartData])

  useEffect(() => {

    const getAllContries = async () => {
      const response = await getAllCountryName()
      setAllContries(response)
    }
    getAllContries()

  }, [])

  


  const counrtyOneData = chartData.countryOneData
  const counrtyTwoData = chartData.countryTwoData



  const data = {
    labels: label, // Update based on available years
    datasets: [
      {
        label: selectedCountry.countryOne + " Likelihood",
        data: counrtyOneData.map(i => i.likelihood),
        fill: true,
        backgroundColor: 'rgba(39, 123, 245, 0.2)',
        borderColor: 'rgba(39, 123, 245, 0.8)',
        borderWidth: 2,
        order: 0,
        tension: 0.4,

      },
      {
        label: selectedCountry.countryTwo,
        data: counrtyTwoData.map(i => i.likelihood),
        fill: true,
        backgroundColor: 'rgba(245, 39, 39, 0.2)',
        borderColor: 'rgba(245, 39, 39, 0.8)',
        borderWidth: 2,
        tension: 0.4,
        order: 1,

      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        stacked: false
      }
    }
  };

  return (
    <div className="px-4 flex">
      {/* Chart Section */}
      <div id='chart' className='flex-[4] h-98'>
        <Line data={data} options={options} />
      </div>
  
      {/* Filter Section */}
      <div className="mt-7 pb-7 flex flex-col p-2  h-min bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
        <label className="m-4 p-2 text-center font-semibold text-gray-700" htmlFor="CountryOne">Compare Countries</label>
  
        <select className="text-white w-full bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" 
          onChange={selectCountry} name="countryOne" id="country">
          {allContries?.map((i, index) =>
            <option
              className='py-2 text-sm text-white'
              key={index}
              value={i}
              selected={i === "Libya"}
            >
              {i}
            </option>
          )}
        </select>
  
        <label className="m-2 text-center font-semibold text-xl text-gray-700" htmlFor="CountryTwo">V/S</label>
  
        <select onChange={selectCountry} className='text-white  w-full bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center' 
          name="countryTwo" id="country">
          {allContries?.map((i, index) =>
            <option
              key={index}
              value={i}
              selected={i === "United Kingdom"}
            >
              {i}
            </option>
          )}
        </select>
      </div>
    </div>
  );
  
  
};

export default AreaChart;
