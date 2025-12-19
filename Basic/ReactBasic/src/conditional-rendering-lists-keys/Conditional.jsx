import { useState } from 'react'

export default function Conditional() {
  const isLogged = true
  const [dark, setDark] = useState(false)

  return (
    <div className={`container ${dark ? 'dark' : 'light'}`}>
      {isLogged && <p>Welcome back User!</p>}

      <h1>Hello</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam esse vero, sequi cupiditate soluta natus corporis veritatis explicabo architecto hic qui illum ut, sed consequatur? Sunt dignissimos amet explicabo?
      </p>

      <button onClick={() => setDark(prev => !prev)}>
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}
