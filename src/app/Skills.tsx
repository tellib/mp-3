import { useEffect } from 'react'

export default function Skills() {
  useEffect(() => {
    document.title = 'Berk Tellioglu | Skills'
  }, [])

  return (
    <>
      <h2>Skills</h2>
      <ul>
        <li>TypeScript/JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Remix</li>
        <li>Node.js</li>
        <li>PyTorch</li>
        <li>FastAPI</li>
        <li>SQL (PostgreSQL & MySQL)</li>
      </ul>
    </>
  )
}
