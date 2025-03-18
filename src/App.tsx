import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router'
import Layout from './components/Layout'
import Education from './app/Education'
import Employment from './app/Employment'
import Projects from './app/Projects'
import Skills from './app/Skills'
import Home from './app/Home'
import Contact from './app/Contact'

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="education" element={<Education />} />
        <Route path="employment" element={<Employment />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
      </Route>
    </Routes>
  )
}

function App() {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter([{ path: '*', Component: Root }])

export default App
