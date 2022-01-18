import React from 'react'
import 'typeface-roboto'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: 'Madrid', country: 'España' },
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Tokyo', country: 'Japón' },
    { city: 'Londres', country: 'Inglaterra' },
]

export const CityListExample = () =>
    <CityList cities={cities} onClickCity={action("Click en city")}></CityList>