import { ApiProvider } from "./context/ApiProvider"
import Show from "./components/Show"

function App() {

  return (
    <ApiProvider>
      <div className="h-full bg-black my-10 mx-10 text-yellow-500 font-abc2">
        <div className="flex flex-wrap flex-justify-between gap-6">
          <img src='/logo1.png' width={200} height={300} alt='imagen' className=" " />
          <h1 className="text-4xl font-thin tracking-tight sm:text-8xl">API</h1>
        </div>
        <Show />
      </div>
    </ApiProvider>

  )
}

export default App
