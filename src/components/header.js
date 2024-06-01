import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'
import Menu from './menu';

async function Header() {
    const session = await auth();

    return (
        <header className="flex w-full py-2 bg-white text-gray-900">
            <div className="w-full text-left flex items-center">
                <Link href="/" className='px-4 font-semibold transition-all duration-200 hover:text-blue-500'>
                    <img src="logo.png" alt="Logo" className="h-14 w-auto" />
                </Link>
                <div className="ml-40 lg:flex my-5 lg:items-center lg:justify-center lg:space-x-10">
                    {session?.user?.role === 'ADMIN' && (
                        <Link href="/usuarios" className='mx-8 font-semibold transition-all duration-200 hover:text-blue-500'>Usuarios</Link>
                    )}
                    <Menu />
                </div>
                <Link href="/comentarios" className='mx-8 font-semibold transition-all duration-200 hover:text-blue-500'>Comentarios</Link>
            </div>

            <div className="ml-40 lg:flex my-5 lg:items-center lg:justify-center lg:space-x-10">
                <nav className='w-full text-right'>
                    {session ? (
                        <form>
                            <button formAction={logout} className='x-8 font-semibold transition-all duration-200 text-red-600 hover:text-white hover:bg-red-600 bg-transparent border-0'>
                                SignOut
                            </button>
                        </form>
                    ) : (
                        <>
                            <Link href="/auth/register" className='mx-4 font-semibold transition-all duration-200 hover:text-blue-500'>Registrarse</Link>
                            <Link href="/auth/login" className='mx-4 font-semibold transition-all duration-200 hover:text-blue-500'>Login</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header