import { useState } from "react"
import useWeather from "../hooks/useWeather"

const Form = () => {

    const [alert, setAlert] = useState('')

    const { search, searchData, consultWeather } = useWeather()

    const { ciudad, pais } = search

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }

        setAlert('')
        consultWeather(search)
    }

    return (
        <div className="contenedor">

            {alert && <p className="alert">{alert}</p>}

            <form
                onSubmit={handleSubmit}
            >
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        onChange={searchData}
                        value={ciudad}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select
                        id="pais"
                        name="pais"
                        onChange={searchData}
                        value={pais}
                    >
                        <option value=""> Seleccion un País </option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="NO">Noruega</option>
                        <option value="EN">Inglaterra</option>
                        <option value="ES">España</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Consultar Clima"
                />
            </form>
        </div>
    )
}

export default Form