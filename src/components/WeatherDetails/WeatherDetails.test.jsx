import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WeatherDetails from './WeatherDetails'

test("WeatherDetails render", async () => {
    // AAA
    // Arrange
    // Act

    // Render
    const { findByText } = render(<WeatherDetails humidity={80} wind={10} />)
    const wind = await findByText(/10/)
    const humidity = await findByText(/80/)
    // Assert
    expect(humidity).toHaveTextContent("Humedad: 80%")
    expect(wind).toHaveTextContent("Viento: 10 km/h")
})