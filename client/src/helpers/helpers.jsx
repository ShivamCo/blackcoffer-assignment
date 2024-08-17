import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL

export const getAllCountryName = async () => {

  try {
    const response = await axios.get(apiUrl + '/allCountryName');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }


}


export const getCountryData = async ({ countryName }) => {

  try {
    const response = await axios.get(apiUrl + `/countryData/${countryName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }

}