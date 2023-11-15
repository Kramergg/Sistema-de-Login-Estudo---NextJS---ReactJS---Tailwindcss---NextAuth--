import Link from 'next/link'
import { getServerSession } from 'next-auth'
import SignOutButton from './sign-out-button'

const Header = async () => {
  const session = await getServerSession()

  return (
    <header className="fixed w-full h-20 flex items-center bg-teal-500 text-slate-50">
      <nav className="w-full flex items-center justify-between m-auto max-w-screen-xl">
        <Link href="/">Logo</Link>
        <ul className="flex items-center gap-10">
          <li><Link href="/">inicio</Link></li>
          <li><Link href="/public">publica</Link></li>
          <li><Link href="/private">privada</Link></li>
         {session && <li><SignOutButton/></li>}

        </ul>
      </nav>
    </header>
  )
}

export { Header }