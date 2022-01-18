import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CityList from './CityList'

const cities = [
    { city: 'Madrid', country: 'España' },
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Tokyo', country: 'Japón' },
    { city: 'Londres', country: 'Inglaterra' },
]

test("CityList render", async () => {
    // AAA
    // Arrange
    // Act

    // Render
    const { findAllByRole } = render(<CityList cities={cities}/>)
    const items = await findAllByRole("listitem")
    // Assert
    expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
    // Mock
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("listitem")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})