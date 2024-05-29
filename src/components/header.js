import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'

async function Header() {
    const session = await auth();

    return (
        <header className="flex w-full py-2 bg-slate-900 text-slate-100">
            <div className=" w-full text-left ">
                <Link href="/" className='px-2 hover:text-sky-300 text-center'>Inicio</Link>
                {session?.user?.role === 'ADMIN'
                    ? <Link href="/usuarios" className='hover:text-sky-300 px-2 text-center'>Usuarios</Link>
                    : ''
                }
                <Link href="/comentarios" className='hover:text-sky-300 text-center'>Comentarios</Link>
            </div>
            <nav className='w-full text-right'>
                {session
                    ? <form><button formAction={logout} className='hover:text-sky-300 hover:bg-red-600 text-red-600 bg-slate-900 border-0'>SignOut</button></form>
                    :
                    (<>
                        <Link href="/auth/register" className='pr-2 hover:text-sky-300 text-center'>Register</Link>
                        <Link href="/auth/login" className="hover:text-sky-300 pr-2 text-center">Login</Link>
                    </>)
                }
            </nav>
        </header>
    )
}

export default Header