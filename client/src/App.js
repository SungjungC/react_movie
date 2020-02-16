import React from 'react'
import './App.css'
import Search from './component/Search'
import Headers from './component/Header'

const App = () => {

    
  return (
    <div className='App'>
      
      <header className='App-header'>
        <Headers/>
      </header>
      <Search/>
  
    </div>
  )
}

export default App
