


import { useEffect, useState } from "react"
import { getAllCountryName } from "../helpers/helpers"
import AreaChart from "../components/charts/AreaChart"
import StackedBarChart from "../components/charts/StackedBarChart"


const Homepage = () => {



    useEffect(() => {
        getAllCountryName()
    }, [])




    return (

        <div className="p-4 sm:ml-64">

            <div className="flex flex-col p-4 border-2 align-middle border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

            <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl ">Compare <span className="text-blue-600 dark:text-blue-500">Likelyhood</span> by Country</h1>
                <AreaChart />

            </div>
            <div className="flex flex-col p-4 border-2 align-middle border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

            <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">Country <mark className="px-2 text-white bg-teal-400 rounded ">Intensity</mark> <mark className="px-2 text-white bg-cyan-400 rounded ">Relevance</mark> & <mark className="px-2 text-white bg-yellow-400 rounded ">Likelyhood</mark></h1>
                <StackedBarChart />

            </div>
        </div>

    )

}

export default Homepage