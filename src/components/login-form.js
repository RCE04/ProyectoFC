'use client'
import { useState } from 'react';
import { login } from '@/lib/actions'
import Button from '@/components/button-form';

function LoginForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await login(data) // Server action
        if (message?.success) {
            // setTipo('success')
            // setResultado(message.success);
        }
        if (message?.error) {
            setTipo('error')
            setResultado(message.error);
        }

    }
    return (
        <form action={wrapper} className='flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-4 mt-8 p-4 bg-gray-100 rounded-lg shadow-md'>
            <div className='w-full'>
                <label className='block mb-2 font-semibold'>Email
                    <input type='email' name='email' placeholder="algo@gmail.com" className='w-full py-2 px-4 mt-1 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-transform duration-300 transform hover:scale-105' />
                </label>
            </div>
            <div className='w-full'>
                <label className='block mb-2 font-semibold'>Contraseña
                    <input type="password" name='password' placeholder="******" className='w-full py-2 px-4 mt-1 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-transform duration-300 transform hover:scale-105' />
                </label>
            </div>
            <p className={`info ${tipo} text-sm ${tipo === 'error' ? 'text-red-500' : 'text-green-500'}`}>{resultado}</p>
            <Button title="Iniciar sesión" />
        </form>
    );
};

export default LoginForm;