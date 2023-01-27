import { useEffect, useState } from "react";
import Input from "./Input";
import useApi from "../hooks/useApi"
import Spinner from "./Spinner";
import Pagination from "./Pagination";

const Show = () => {
    const { setPage, page, allData, spinner, searchQuery } = useApi()
    const [filteredGender, setFilteredGender] = useState('')
    const [filtered, setFiltered] = useState('')

    useEffect(() => {
        if (filteredGender && allData) {
            const filtered1 = allData.results.filter(e => e.gender === filteredGender)
            setFiltered(filtered1)
        }
    }, [filteredGender, page, searchQuery])

    return (
        <>
            <Input />
            <div className="flex grid-rows-1 grid-flow-col ">
                <div className="mx-10 text-2xl font-abc3D font-bold">Filtrar por</div>
                <select className="grid grid-rows-1 grid-flow-col font-bold bg-zinc-900 font-abc3D rounded-lg text-xl border-amber-500"
                    value={filteredGender}
                    onChange={e => setFilteredGender(e.target.value)} >
                    <option value=''>Todos los Generos</option>
                    <option value='male'>Masculino</option>
                    <option value='female'>Femenino</option>
                    <option value='n/a'>n/a</option>
                    <option value='hermaphrodite'>Hemafrodita</option>
                </select>
            </div>

            {filtered ?
                (<div className="flex grid-rows-1 grid-flow-col gap-2 w-3/4 px-10">
                    <table className="mx-2 table text-left font-abc3D text-2xl w-3/4 text-blue-400">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Especie</th>
                                <th>Genero</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length !== 0 ?
                                filtered.map(e => (
                                    <tr key={e.edited} className="text-amber-600">
                                        <td>{e.name}</td>
                                        <td>{e.species}</td>
                                        <td>{e.gender}</td>
                                    </tr>
                                )) :
                                <tr className="text2xl text-red-800">
                                    <td > - </td>
                                    <td > - </td>
                                    <td > - </td>
                                </tr>}
                        </tbody>
                    </table>
                </div>)
                :
                (allData ? spinner ? "" :
                    <div className="flex grid-rows-1 grid-flow-col gap-2 w-3/4 px-10">
                        <table className="mx-2 table text-left font-abc3D text-2xl w-3/4 text-blue-400">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Especie</th>
                                    <th>Genero</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allData.results.map(e => (
                                    <tr key={e.edited} className="text-amber-600">
                                        <td >{e.name}</td>
                                        <td >{e.species}</td>
                                        <td className="text-flex">{e.gender}</td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                    : <Spinner />
                )}
            <Pagination />
        </>
    )
}
export default Show

