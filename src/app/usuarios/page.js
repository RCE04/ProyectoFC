import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from 'next/link'
import User from '@/components/User'
import { getUsers } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const sesion = await auth()

    if (sesion?.user.role !== 'ADMIN') {
        redirect('/')
    }

    const users = await getUsers()
    // console.log(zoos);

    return (
        <div className="mt-5">
            <Link className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black ' href="/usuarios/new"> Nuevo ususario </Link>
            {
                users.map((user) => (
                    <User key={user.id} user={user} >
                        <Link
                            className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black '
                            href={{ pathname: '/usuarios/edit', query: { id: user.id } }}>
                            Editar usuario
                        </Link>
                        <Link
                            className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black '
                            href={{ pathname: '/usuarios/delete', query: { id: user.id } }}>
                            Eliminar usuario
                        </Link>
                    </User>
                ))
            }
        </div>
    )
}
