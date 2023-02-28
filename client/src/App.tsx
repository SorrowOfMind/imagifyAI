import { Route, Routes } from "react-router-dom"

import {Header} from "./components";
import {MainContainer, Decor} from "./layout";
import {Home, CreateImg, SignUp, LogIn} from "./pages"

function App() {
  return (
    <div className="w-full h-full min-h-screen bg-white">
      <Decor/>
      <MainContainer>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateImg/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
      </MainContainer>
    </div>
  )
}

export default App
