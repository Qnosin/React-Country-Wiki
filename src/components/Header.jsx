import React from 'react'

function Header({className}) {
  return (
    <header className={className}>
        <h1>Where in the world?</h1>
        <button className='DarkMode'>☾ Dark Mode</button>
    </header>
  )
}

export default Header