import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Berk Tellioglu | Home'
  }, [])

  return (
    <>
      <h2>About Me</h2>
      <img
        src="profile.png"
        alt="Berk Tellioglu"
        className="rounded-full mx-auto ring-4 ring-slate-600 shadow-inner"
      />
      <p>
        My name is Berk Tellioglu. I am a computer science student at Boston
        University. I am interested in web development and machine learning.
        Please check out this website to learn more about me!
      </p>
    </>
  )
}
