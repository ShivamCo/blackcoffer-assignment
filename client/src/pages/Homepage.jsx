


import { useEffect, useState } from "react"
import { getAllCountryName } from "../helpers/helpers"
import AreaChart from "../components/charts/AreaChart"


const Homepage = () => {



    useEffect(() => {
        getAllCountryName()
    }, [])




    return (

        <div className="p-4 sm:ml-64">

            <div className="flex flex-col p-4 border-2 align-middle border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

            <h2 className=' text-center text-gray-700 font-semibold text-2xl m-5 ' >Likelyhood by Contries</h2>
                <AreaChart />

            </div>
        </div>

    )

}

export default Homepage