import useWeather from "../hooks/useWeather"
import Form from "./Form"
import Result from "./Result"
import Spinner from "./Spinner"

const AppWeather = () => {

  const { result, loading, noResult } = useWeather()

  return (
    <>
        <main className="dos-columnas">
            <Form />

            {loading ? <Spinner /> :
              result?.name ? <Result /> :
                noResult ? <p className="alert">{noResult}</p> : 
                  <p className="alert">El clima se va a mostrar aquí</p>}
        </main>
    </>
  )
}

export default AppWeather