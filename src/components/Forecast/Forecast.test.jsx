import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Forecast from './Forecast'

const forecastItemList = [
    { weekDay: 'Lunes', hour: 10, state: 'sunny', temperature: 20 },
    { weekDay: 'Martes', hour: 11, state: 'cloud', temperature: 10 },
    { weekDay: 'Miércoles', hour: 12, state: 'cloudy', temperature: 5 },
    { weekDay: 'Jueves', hour: 13, state: 'fog', temperature: 11 },
    { weekDay: 'Viernes', hour: 14, state: 'rain', temperature: 12 },
    { weekDay: 'Sábado', hour: 15, state: 'sunny', temperature: 30 },
    { weekDay: 'Domingo', hour: 16, state: 'cloud', temperature: 9 },
]

test("Forecast render", async () => {
    // data-testid="forecast-item-container"
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)
    const forecastItems = await findAllByTestId("forecast-item-container") 

    expect(forecastItems).toHaveLength(7)
})