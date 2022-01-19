import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ForecastItem from './ForecastItem'

test("ForecastItem render", async () => {
    // AAA
    // Arrange
    // Act

    // Render
    const { findByText } = render(<ForecastItem weekDay='Lunes' hour={10} state='sunny' temperature={23} />)
    const hour = await findByText(/10/)
    const temperature = await findByText(/23/)
    const weekDay = await findByText("Lunes")
    // Assert
    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("23 º")
    expect(weekDay).toHaveTextContent("Lunes")
})