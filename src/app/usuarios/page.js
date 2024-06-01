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

    return (
        <div className="mt-5">
            <Link className="text-s text-white font-bold mb-10 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black transition-all duration-200" href="/usuarios/new"> Nuevo ususario </Link>
            {
                users.map((user) => (
                    <User key={user.id} user={user} >
                        <Link
                            className="text-s text-white font-bold mt-4 mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black transition-all duration-200"
                            href={{ pathname: '/usuarios/edit', query: { id: user.id } }}>
                            Editar usuario
                        </Link>
                        <Link
                            className="text-s text-white font-bold mx-4 mt-4 mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black transition-all duration-200"
                            href={{ pathname: '/usuarios/delete', query: { id: user.id } }}>
                            Eliminar usuario
                        </Link>
                    </User>
                ))
            }
        </div>
    )
}
