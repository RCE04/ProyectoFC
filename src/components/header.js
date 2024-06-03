import Link from 'next/link';
import { auth } from "@/auth";
import { logout } from '@/lib/actions';
import Menu from './menu';
import Hamburguesa from './hamburguesa';

async function Header() {
    const session = await auth();

    return (
        <header className="flex items-center justify-between w-full py-2 bg-white text-gray-900">
            <div className="flex items-center">
                <Link href="/" className='px-4 font-semibold transition-all duration-200 hover:text-blue-500'>
                    <img src="logo.png" alt="Logo" className="h-14 w-auto" />
                </Link>
            </div>

            <div className="hidden lg:flex flex-grow items-center justify-center">
                {session?.user?.role === 'ADMIN' && (
                    <Link href="/usuarios" className='mx-4 font-semibold transition-all duration-200 hover:text-blue-500'>Usuarios</Link>
                )}
                <Menu />
                <Link href="/comentarios" className='mx-4 font-semibold transition-all duration-200 hover:text-blue-500'>Comentarios</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
                <nav className='flex items-center'>
                    {session ? (
                        <form>
                            <button formAction={logout} className='mx-4 font-semibold transition-all duration-200 text-red-600 hover:text-white hover:bg-red-600 bg-transparent border-0'>
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

            <Hamburguesa session={session} logout={logout} />
        </header>
    );
}

export default Header;