import React from 'react'
import Header from "./components/Header"
import data from "./data"
import Destination from "./components/Destination"
import './App.css'


function App() {

  const dataEl = data.map( dest => {
    console.log(dest)
    return (
      <Destination
        key={dest.id}
        {...dest} // spread the object to pass it as a prop
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className='destinations'>
        {dataEl}
      </section>
    </div>
  )
}

export default App
