import { useEffect } from 'react'

export default function Education() {
  useEffect(() => {
    document.title = 'Berk Tellioglu | Education'
  }, [])

  return (
    <>
      <h2>Education</h2>
      <p>
        For undergrad, I went to Boston University and studied Human Physiology
        on the premed track. My coursework for my Masters in Computer Science
        includes the following:
      </p>
      <h3>Fall 2023</h3>
      <ul>
        <li>MET CS662 Computer Language Theory</li>
        <li>MET CS575 Operating Systems</li>
      </ul>
      <h3>Spring 2024</h3>
      <ul>
        <li>MET CS622 Advanced Programming Techniques</li>
        <li>MET CS566 Analysis of Algorithms</li>
      </ul>
      <h3>Summer 2024</h3>
      <ul>
        <li>MET CS601 Web Application Development</li>
        <li>MET CS673 Software Engineering</li>
      </ul>
      <h3>Fall 2024</h3>
      <ul>
        <li>MET CS767 Advanced Machine Learning</li>
        <li>MET CS602 Server-Side Web Development</li>
      </ul>
      <h3>Spring 2025</h3>
      <ul>
        <li>MET CS579 Database Management</li>
        <li>MET CS701 Rich Internet Application Development</li>
      </ul>
    </>
  )
}
