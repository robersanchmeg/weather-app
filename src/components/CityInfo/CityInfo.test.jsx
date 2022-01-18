import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Madrid"
    const country = "España"
    // Render
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
    const cityAndCountryComponents = await findAllByRole("heading")
    // Assert
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})