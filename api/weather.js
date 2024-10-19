import axios from 'axios'
import {apiKey} from '@/constants'

const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;



const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint,
    }

    try {

        const response = await axios.request(options)
        return response.data;  // Возвращаем данные ответа

    } catch (err) {
        console.log('err', err)
        return null
    }


}

// fetchWeatherForecast
export const fetchWeatherForecast = params => {


    return apiCall(forecastEndpoint(params))

}

// fetchLocation
export const fetchLocation = params => {

    console.log('weather.js fetchLocation params city name: ',params.cityName)

    return apiCall(locationEndpoint(params))

}