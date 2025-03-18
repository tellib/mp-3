import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Berk Tellioglu | Contact'
  }, [])

  return (
    <>
      <h2>Contact</h2>
      <h3>Email</h3>
      <a className="no-underline" href="mailto:btelli@bu.edu">
        btelli@bu.edu
      </a>
      <h3>Phone</h3>
      <p>123-456-7890</p>
    </>
  )
}
