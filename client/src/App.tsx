import { Route, Routes } from "react-router-dom"

import {Header} from "./components";
import {MainContainer, Decor} from "./layout";
import {Home, CreateImg} from "./pages"

function App() {
  return (
    <div className="w-full h-full min-h-screen bg-white">
      <Decor/>
      <MainContainer>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="create" element={<CreateImg/>}/>
        </Routes>
      </MainContainer>
    </div>
  )
}

export default App
