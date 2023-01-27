import useApi from "../hooks/useApi"

const Input = () => {

    const { searchQuery, setSearchQuery } = useApi()

    return (
        <>
            <div className="grid grid-rows-1 grid-flow-col text-2xl font-abc3D mx-3 gap-2 text-yellow-500 py-2 px-2">
                <input className="rounded text-yellow-300 font-bold bg-zinc-900"
                    placeholder="Darth Vader.."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)} />
                <button className="text-yellow-500 text-left "
                    onClick={() => setSearchQuery('')}>X
                </button>
            </div >

        </>


    )
}

export default Input