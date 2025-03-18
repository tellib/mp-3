import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="bg-slate-900 antialiased">
      <div className="mx-auto w-[80vw] min-h-[100vh] flex flex-col bg-blue-200 shadow-md">
        <Header />
        <div className="flex-grow flex flex-col md:flex-row h-full">
          <Nav />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  )
}
