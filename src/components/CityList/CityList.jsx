import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

//funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry
    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item
                    md={8}
                    xs={12}>
                    <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                <Grid item
                    md={4}
                    xs={12}>
                    <Weather temperature={10} state='sunny'></Weather>
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {
                //funcion que retorna otra funcion
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

/*
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
*/
CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList

