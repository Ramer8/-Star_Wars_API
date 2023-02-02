import useApi from "../hooks/useApi"

const Input = () => {

    const { searchQuery, setSearchQuery } = useApi()

    return (
        <>
            <div className="grid-rows-1 grid-flow-col flex items-start text-2xl font-abc3D ml-2 gap-2 text-yellow-500 py-3 px-2 pb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 my-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input className="rounded text-yellow-300 bg-zinc-900 font-extralight flex-1"
                    placeholder="Darth Vader.."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)} />
                <button className="text-yellow-500 text-left hover:text-yellow-700 font-extralight flex-1 "
                    onClick={() => setSearchQuery('')}>X
                </button>
            </div >
        </>
    )
}

export default Input