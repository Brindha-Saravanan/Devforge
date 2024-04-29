// import React from 'https://cdn.skypack.dev/react'
// import { render } from 'https://cdn.skypack.dev/react-dom'
import React from "react"
import './about.css'
// const ROOT_NODE = document.querySelector('#app')

/**
* Tiny hook that you can use where you need it 
*/
const usePointerGlow = () => {
  const [status, setStatus] = React.useState(null)
  React.useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2)
      const y = pointerY.toFixed(2)
      const xp = (pointerX / window.innerWidth).toFixed(2)
      const yp = (pointerY / window.innerHeight).toFixed(2)
      document.documentElement.style.setProperty('--x', x)
      document.documentElement.style.setProperty('--xp', xp)
      document.documentElement.style.setProperty('--y', y)
      document.documentElement.style.setProperty('--yp', yp)
      setStatus({ x, y, xp, yp })
    }
    document.body.addEventListener('pointermove', syncPointer)
    return () => {
      document.body.removeEventListener('pointermove', syncPointer)
    }
  }, [])
  return [status]
}

const About = () => {
  const [status] = usePointerGlow();
  return (
    
    <main>
      <article data-glow>
        <h2>WEB DEVLOPMENT</h2>
        <span data-glow />
        <button data-glow>
          <span>BEGIN NOW</span>
        </button>
      </article>
      <article data-glow>
        <h2>COMPUTER NETWORKS</h2>
        <span data-glow />
        <button data-glow>
          <span>BEGIN NOW</span>
        </button>
      </article>
      <article data-glow>
      <h2>OPERATING SYSTEM</h2>
        <span data-glow />
        <button data-glow>
          <span>BEGIN NOW</span>
        </button>
      </article>
    </main>
  )
}

export default About;