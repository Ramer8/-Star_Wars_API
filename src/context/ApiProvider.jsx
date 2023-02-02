import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext()
const ApiProvider = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [spinner, setSpinner] = useState(false)
    const [page, setPage] = useState(1)
    const [allData, setAllData] = useState()
    const [filtered, setFiltered] = useState('')

    const searchData = async () => {
        setSpinner(true)
        try {
            const { data } = await axios(`https://swapi.dev/api/people/?search=${searchQuery}&page=${page}`)
            const results = data
            const newData = data

            for (let index = 0; index < results.results.length; index++) {
                if (results.results[index].species.length) {
                    const { data } = await axios(results.results[index].species[0])
                    newData.results[index].species = data.name
                } else {
                    newData.results[index].species = ""
                }
            }
            setAllData(newData)
            setSpinner(false)

        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        searchData()
    }, [searchQuery, page])

    return (
        <ApiContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                setPage,
                page,
                allData,
                spinner,
                searchQuery,
                searchData,
                filtered,
                setFiltered,
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}

export {
    ApiProvider
}

export default ApiContext