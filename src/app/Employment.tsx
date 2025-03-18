import { useEffect } from 'react'

export default function Employment() {
  useEffect(() => {
    document.title = 'Berk Tellioglu | Employment'
  }, [])

  return (
    <>
      <h2>Employment</h2>
      <h3>Boston University</h3>
      <ul>
        <li>Research Specialist</li>
        <li>Center for Brain Recovery</li>
        <li>2022 - Present</li>
      </ul>
      <h3>Massachusetts General Hospital</h3>
      <ul>
        <li>Clinical Research Associate</li>
        <li>Cancer Center Protocol Office</li>
        <li>2021 - 2023</li>
      </ul>
    </>
  )
}
