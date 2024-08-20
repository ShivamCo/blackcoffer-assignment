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

  console.log(selectedCountry)


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

    <div className="px-4">
      
      <div className="flex justify-center p-2 " >
        <label className="m-2 font-semibold  text-gray-700 " htmlFor="CountryOne">Compare Countries</label>

        <select className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onChange={selectCountry} name="countryOne" id="country">
          {
            allContries?.map(i =>
              <option
              className='py-2 text-sm text-white'
                key={allContries.indexOf(i)}
                value={i}
                selected={i === "Libya"}
              >
                {i}
              </option>
            )
          }



        </select>

        <label className="m-2 font-semibold text-xl text-gray-700 " htmlFor="CountryTwo">V/S</label>

        <select onChange={selectCountry} className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center' name="countryTwo" id="country">
        {
            allContries?.map(i =>
              <option
                key={allContries.indexOf(i)}
                value={i}
                selected={i === "United Kingdom"}
              >
                {i}
              </option>
            )
          }

        </select>
      </div>

      <Line data={data} options={options} />
    </div>

  );
};

export default AreaChart;
