'use client';
import { useState } from 'react';
import { login } from '@/lib/actions';
import Button from '@/components/button-form';

function LoginForm() {
    const [resultado, setResultado] = useState("");
    const [tipo, setTipo] = useState("");

    async function wrapper(data) {
        const message = await login(data); // Server action
        if (message?.success) {
            // setTipo('success')
            // setResultado(message.success);
        }
        if (message?.error) {
            setTipo('error');
            setResultado(message.error);
        }
    }

    return (
        <form onSubmit={wrapper} className='flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-4 mt-8 p-4 bg-gray-100 rounded-lg'>
            <div className='w-full'>
                <label htmlFor='email' className='block mb-1 font-semibold'>Email</label>
                <input type='email' id='email' name='email' placeholder="algo@gmail.com" className='w-full py-2 px-4 mb-4 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' />
            </div>
            <div className='w-full'>
                <label htmlFor='password' className='block mb-1 font-semibold'>Contraseña</label>
                <input type='password' id='password' name='password' placeholder="******" className='w-full py-2 px-4 mb-4 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' />
            </div>
            {tipo && <p className={`text-sm text-${tipo}-500`}>{resultado}</p>}
            <Button title="Iniciar sesión" />
        </form>
    );
}

export default LoginForm;
