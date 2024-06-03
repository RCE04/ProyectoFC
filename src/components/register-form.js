'use client'
import { useState } from 'react';
import { register } from '@/lib/actions'
import { redirect } from 'next/navigation';
import Button from '@/components/button-form';


function RegisterForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await register(data) // Server action
        if (message.success) {
            setTipo('success')
            // setResultado(message.success);
            redirect('/auth/login')
        } else {
            setTipo('error')
            setResultado(message.error);
        }

    }
    return (
        <form action={wrapper} className='flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-4 mt-8 p-4 bg-gray-100 rounded-lg shadow-md'>
            <div className='w-full'>
                <label className='block mb-2 font-semibold'>Nombre
                    <input type='text' name='nombre' placeholder="Pepe Garcia Ruiz" className='w-full py-2 px-4 mt-1 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-transform duration-300 transform hover:scale-105' />
                </label>
            </div>
            <div className='w-full'>
                <label className='block mb-2 font-semibold'>Email
                    <input type='email' name='email' placeholder="jose@mail.com" className='w-full py-2 px-4 mt-1 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-transform duration-300 transform hover:scale-105' />
                </label>
            </div>
            <div className='w-full'>
                <label className='block mb-2 font-semibold'>Contraseña
                    <input type="password" name='password' placeholder="******" className='w-full py-2 px-4 mt-1 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-transform duration-300 transform hover:scale-105' />
                </label>
            </div>
            <p className={`info ${tipo} text-sm ${tipo === 'error' ? 'text-red-500' : 'text-green-500'}`}>{resultado}</p>
            <Button title="Crear cuenta" />
        </form>
    );
};

export default RegisterForm;