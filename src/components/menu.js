"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('.menu-container')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="relative menu-container z-20">
            <button
                onClick={toggleMenu}
                className="font-semibold text-gray-900 transition-all duration-200 hover:text-[#048dde]"
                aria-expanded={menuOpen}
                aria-controls="monumentos-menu"
            >
                Monumentos
            </button>
            {menuOpen && (
                <div
                    id="monumentos-menu"
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-30 w-64"
                >
                    <Link href="/celda" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center">Celda de Cervantes</Link>
                    <Link href="/castillo" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center">Castillo-Muralla</Link>
                    <Link href="/parroquia" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center">Parroquia de nuestra señora de la asuncion</Link>
                    <Link href="/iglesia" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center">Iglesia de nuestra señora del carmen</Link>
                    <Link href="/convento" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center">Convento de Scala Coeli</Link>
                    <Link href="/triunfo" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center">Triunfo de San Rafael</Link>
                    <Link href="/barrio" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center">Barrio de la villa</Link>
                    <Link href="/museo" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center">Museo Antonio Villa-Toro (Iglesia de San Acisclo y Santa Victoria)</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;
