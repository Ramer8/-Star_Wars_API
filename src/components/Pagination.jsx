import React from 'react'
import useApi from "../hooks/useApi"

const Pagination = () => {
    const { setPage, page, allData } = useApi()

    return (
        <>
            <div>
                {allData ? (<div className="container text-2xl mt-5  text-center font-abc3D font-extralight md:w-3/4 md:px-2 py-1 pl-1 pr-6 mx-3" >
                    <div className="grid grid-rows-1 grid-flow-col text-black" >
                        <div className="grid grid-rows-1 grid-flow-col gap-0 ">
                            <button className="text-yellow-500  uppercase hover:text-yellow-700 rounded-xl"
                                onClick={() => setPage(1)}> inicio</button>
                            {allData.previous === null ?
                                allData.next === null ?
                                    '' : ''
                                : <button className="text-yellow-500 hover:text-yellow-700"
                                    onClick={() => setPage(page - 1)}>
                                    {page - 1}
                                </button>}
                            <h1 className="text-blue-500 font-bold text-3xl">{page}</h1>
                            {allData.next !== null ?
                                <button className="text-yellow-500 hover:text-yellow-700"
                                    onClick={() => setPage(page + 1)}>
                                    {page + 1}
                                </button>
                                : ''}
                            {allData.next !== null ?
                                <button className="text-yellow-500  uppercase hover:text-yellow-700"
                                    onClick={() => setPage(page + 1)}>
                                    siguiente
                                </button>
                                : ''}
                            <span>    </span>
                        </div>
                    </div>
                </div>
                ) : <div className="text-center py-5">...Cargando Paginación</div>}
            </div>
        </>
    )
}

export default Pagination