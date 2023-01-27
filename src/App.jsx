import { ApiProvider } from "./context/ApiProvider"
import Show from "./components/Show"

function App() {

  return (
    <ApiProvider>
      <div className="h-full gap-3 bg-black my-10 mx-10 text-yellow-500 font-abc2">
        <div className=" flex flex-wrap flex-justify-between flex-2 content-start item-center gap-6">
          <img src='/logo1.png' width={200} height={300} alt='imagen' className="sm:block " />
          <h1 className="text-4xl  font-thin tracking-tight sm:text-8xl">API</h1>
        </div>
        <Show />
      </div>
    </ApiProvider>

  )
}

export default App
