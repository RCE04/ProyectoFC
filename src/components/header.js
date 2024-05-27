"use client";
import Link from 'next/link';
import { auth } from "@/auth";
import { logout } from '@/lib/actions';
import { useState, useEffect } from 'react';

function Header() {
    const [session, setSession] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        async function getSession() {
            const sessionData = await auth();
            setSession(sessionData);
        }
        getSession();
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <Link href="/" title="" className="flex">
                        <img className="w-auto h-14" src="logo.png" alt="" />
                    </Link>
                </div>


                <div className="ml-40 lg:flex lg:items-center lg:justify-center lg:space-x-10 relative">
                    <div className="flex items-center">
                        <button onClick={toggleMenu} className='font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]'>
                            Monumentos
                        </button>
                        {menuOpen && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                                <Link href="/celda" className="block px-10 py-3 text-sm text-gray-700 hover:bg-gray-100 overflow-hidden">Celda de Cervantes</Link>
                                <Link href="/castillo" className="block px-10 py-3 text-sm text-gray-700 hover:bg-gray-100 overflow-hidden">Castillo-Muralla</Link>
                                <Link href="/parroquia" className="block px-20 py-3 text-sm text-gray-700 hover:bg-gray-100 overflow-hidden">Parroquia de nuestra señora de la asuncion</Link>
                                <Link href="/iglesia" className="block px-10 py-3 text-sm text-gray-700 hover:bg-gray-100 overflow-hidden">Iglesia de nuestra señora del carmen</Link>
                                <Link href="/convento" className="block px-10 py-3 text-sm text-gray-700 hover:bg-gray-100 overflow-hidden">Convento de Scala Coeli</Link>
                                <Link href="/triunfo" className="block px-10 py-3 text-sm text-gray-700 hover:bg-gray-100 overflow-hidden">Triunfo de San Rafael</Link>
                                <Link href="/barrio" className="block px-10 py-3 text-sm text-gray-700 hover:bg-gray-100 overflow-hidden">Barrio de la villa</Link>
                                <Link href="/museo" className="block px-10 py-3 text-sm text-gray-700 hover:bg-gray-100 overflow-hidden">Museo Antonio Villa-Toro (Iglesia de San Acisclo y Santa Victoria)</Link>
                            </div>
                        )}
                    </div>
                </div>

                <Link href="/comentarios" className='text-base mx-16 font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]'>Comentarios</Link>

                <nav className='w-full text-right'>
                    {session
                        ? <form><button formAction={logout} className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-[#043c54] hover:text-white transition-all duration-200 focus:bg-black focus:text-[#f3bc04]">SignOut</button></form>
                        :
                        (<>
                            <Link href="/auth/register" className='text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]'>Registrarse</Link>
                            <Link href="/auth/login" className="text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde] mx-10">Iniciar sesion</Link>
                        </>)
                    }
                </nav>
            </div>
        </header >
    );
}

export default Header;