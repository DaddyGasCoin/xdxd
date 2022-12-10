// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayMainPage from "../components/DisplayMainPage";
import DisplayProfile from "../components/DisplayProfile";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <div className="flex flex-col"> */}
        <Routes>
          <Route path='/' element={<DisplayMainPage />} />
          <Route path='/profile' element={<DisplayProfile />} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  )
}

export default App
