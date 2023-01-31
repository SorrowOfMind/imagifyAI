import { Outlet } from "react-router-dom"

const MainContainer = () => {
  return (
    <main className="w-full sm:p-8 py-8 px-4 bg-[#DAA8EC] min-h-[calc(100vh-73px)]">
        <Outlet/>
    </main>
  )
}

export default MainContainer