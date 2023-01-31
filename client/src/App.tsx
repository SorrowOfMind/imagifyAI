import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import MainContainer from "./layout/MainContainer"
import CreateImg from "./pages/CreateImg"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route element={<MainContainer/>}>
          <Route index element={<Home/>}/>
          <Route path="create-img" element={<CreateImg/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
