import { useEffect, useState } from "react";
import Input from "./Input";
import useApi from "../hooks/useApi"
import Spinner from "./Spinner";
import Pagination from "./Pagination";

const Show = () => {
    const { page, allData, spinner, searchQuery, filtered, setFiltered } = useApi()
    const [filteredGender, setFilteredGender] = useState('1')

    useEffect(() => {
        if (filteredGender && allData) {
            if (filteredGender == 1) {
                setFiltered(allData.results)
            }
            else {
                const filtered1 = allData.results.filter(e => e.gender === filteredGender)
                setFiltered(filtered1)
            }
        }
    }, [filteredGender, page, searchQuery, allData])

    return (
        <>
            <Input />
            <div className="flex grid-rows-1 grid-flow-col mb-5 ">
                <div className="mx-3 text-2xl font-abc3D font-bold ">Filtrar por</div>
                <select className="flex hover:bg-amber-500 hover:text-black font-bold bg-zinc-900 font-abc3D rounded-lg text-xl "
                    value={filteredGender}
                    onChange={e => setFilteredGender(e.target.value)} >
                    <option value='1'>Todos los Generos</option>
                    <option value='male'>Masculino</option>
                    <option value='female'>Femenino</option>
                    <option value='n/a'>n/a</option>
                    <option value='hermaphrodite'>Hermafrodita</option>
                </select>
            </div>
            {spinner ?
                <div className="flex md:w-3/4 pt-20 pb-20">
                    <Spinner />
                </div>
                :
                filtered ?
                    (<div>
                        <div className="flex grid-rows-1 grid-flow-col gap-2 px-2 ">
                            <table className="mx-2 table text-left font-abc3D text-2xl w-3/4 text-blue-400">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th className="px-2">Especie</th>
                                        <th className="px-2">Genero</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.length !== 0 ?
                                        filtered.map(e => (
                                            <tr key={e.edited} className="text-amber-600">
                                                <td>{e.name}</td>
                                                <td className="px-2">{e.species}</td>
                                                <td className="px-2">{e.gender}</td>
                                            </tr>
                                        )) :
                                        <tr className="text2xl text-red-800">
                                            <td > - </td>
                                            <td > - </td>
                                            <td > - </td>
                                        </tr>}
                                </tbody>
                            </table>
                        </div>
                        <Pagination />
                    </div>)
                    :
                    <Spinner />
            }
        </>
    )
}
export default Show

