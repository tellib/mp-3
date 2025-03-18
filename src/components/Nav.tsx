import {
  Briefcase,
  Github,
  House,
  MessageCircleMore,
  School,
  Star,
} from 'lucide-react'
import { Link } from 'react-router'

export default function Nav() {
  const StyledLink = ({
    to,
    children,
  }: {
    to: string
    children: React.ReactNode
  }) => (
    <Link
      to={to}
      className="tracking-tight ring-1 ring-inset ring-white/50 shadow-md flex gap-2 rounded-lg p-2 bg-gradient-to-r hover:from-slate-200 hover:to-slate-300 transition items-center from-slate-300 to-slate-100 font-medium"
    >
      {children}
    </Link>
  )
  return (
    <nav className="flex-none flex md:basis-[30%] md:flex-col gap-2 p-2 from-slate-400 to-slate-500 bg-gradient-to-b flex-wrap justify-center md:justify-start">
      <StyledLink to="/">
        <House />
        Home
      </StyledLink>
      <StyledLink to="/education">
        <School />
        Education
      </StyledLink>
      <StyledLink to="/employment">
        <Briefcase />
        Employment
      </StyledLink>
      <StyledLink to="/projects">
        <Github />
        Projects
      </StyledLink>
      <StyledLink to="/skills">
        <Star />
        Skills
      </StyledLink>
      <StyledLink to="/contact">
        <MessageCircleMore />
        Contact
      </StyledLink>
    </nav>
  )
}
