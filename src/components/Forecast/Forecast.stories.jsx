import React from 'react'
import 'typeface-roboto'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { weekDay: 'Lunes', hour: 10, state: 'sunny', temperature: 20 },
    { weekDay: 'Martes', hour: 11, state: 'cloud', temperature: 10 },
    { weekDay: 'Miércoles', hour: 12, state: 'cloudy', temperature: 5 },
    { weekDay: 'Jueves', hour: 13, state: 'fog', temperature: 11 },
    { weekDay: 'Viernes', hour: 14, state: 'rain', temperature: 12 },
    { weekDay: 'Sábado', hour: 15, state: 'sunny', temperature: 30 },
    { weekDay: 'Domingo', hour: 16, state: 'cloud', temperature: 9 },
]

export const ForecastExample = () =>(<Forecast forecastItemList={forecastItemList}></Forecast>)