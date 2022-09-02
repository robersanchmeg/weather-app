import { useState, createContext } from "react"
import axios from "axios"

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    const [search, setSearch] = useState({
        ciudad: '',
        pais: ''
    })

    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(false)
    const [noResult, setNoResult] = useState('')

    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const consultWeather = async datas => {

        setResult('')
        setLoading(true)
        setNoResult('')

        try {
            const { ciudad, pais } = datas

            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const { data } = await axios(url)

            const { lat, lon } = data[0]

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: dataWeather } = await axios(urlWeather)
            
            setResult(dataWeather)

        } catch (error) {
            setNoResult('No hay resultados')
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                search,
                searchData,
                consultWeather,
                result,
                loading,
                noResult
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext