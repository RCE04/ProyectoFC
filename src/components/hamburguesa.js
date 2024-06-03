'use client';
import { useState } from 'react';
import Menu from './menu';
import Link from 'next/link';

function Hamburguesa({ session, logout }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <section className="MOBILE-MENU flex lg:hidden">
            <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
            >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                    className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                >
                    <svg
                        className="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                    {session?.user?.role === 'ADMIN' && (
                        <li className="my-8 text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]">
                            <Link href="/usuarios">Usuarios</Link>
                        </li>
                    )}
                    <li className="my-8 text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]">
                        <Link href="/comentarios">Comentarios</Link>
                    </li>
                    <li className="my-8 text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]">
                        <Menu />
                    </li>
                    <li className="my-8">
                        {session ? (
                            <form>
                                <button
                                    formAction={logout}
                                    className="text-red-600 hover:text-white hover:bg-red-600 transition-all duration-200"
                                >
                                    SignOut
                                </button>
                            </form>
                        ) : (
                            <>
                                <Link href="/auth/register" className='mx-4 font-semibold transition-all duration-200 hover:text-blue-500'>Registrarse</Link>
                                <Link href="/auth/login" className='mx-4 font-semibold transition-all duration-200 hover:text-blue-500'>Login</Link>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Hamburguesa;