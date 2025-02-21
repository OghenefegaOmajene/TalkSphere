import { useState } from 'react'
import './App.css'
import AppRouter from '../AppRouter'

function App() {
 
  window.addEventListener("beforeunload", () => {
    localStorage.clear();
  });
  
  return (
    <>
      <div className="App">
        <AppRouter/>
      </div>

      
    </>
  )
}

export default App
