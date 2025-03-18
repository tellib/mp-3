import { Outlet } from 'react-router'

export default function Main() {
  return (
    <main className="w-full flex-grow from-slate-200 to-slate-300 bg-gradient-to-br p-6 shadow-inner prose prose-slate max-w-none">
      <Outlet />
    </main>
  )
}
