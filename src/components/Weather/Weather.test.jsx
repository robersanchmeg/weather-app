import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Weather from './Weather'

test("Weather render cloud", async () => {
    // AAA
    // Arrange
    // Act

    // Render
    const { findByRole } = render(<Weather temperature={10} state='cloud'/>)
    const temp = await findByRole("heading")
    // Assert
    expect(temp).toHaveTextContent("10")
})

test("Weather render sunny", async () => {
    // AAA
    // Arrange
    // Act

    // Render
    const { findByRole } = render(<Weather temperature={20} state='sunny'/>)
    const temp = await findByRole("heading")
    // Assert
    expect(temp).toHaveTextContent("20")
})