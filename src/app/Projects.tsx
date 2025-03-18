import { useEffect } from 'react'
import Calculator from '../components/Calculator'

export default function Projects() {
  useEffect(() => {
    document.title = 'Berk Tellioglu | Projects'
  }, [])

  return (
    <>
      <h2>Projects</h2>
      <h3>GitHub</h3>
      <ul>
        <li>
          <a
            className="no-underline"
            href="https://github.com/tellib/ai-chatbot"
          >
            AI Chatbot
          </a>
        </li>
        <li>
          <a className="no-underline" href="https://github.com/tellib/kanban">
            Kanban Board
          </a>
        </li>
        <li>
          <a
            className="no-underline"
            href="https://github.com/tellib/zodiac-symbol"
          >
            Zodiac Symbol
          </a>
        </li>
      </ul>
      <h3>TypeScript Calculator</h3>
      <Calculator />
    </>
  )
}
