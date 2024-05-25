import Link from 'next/link'
import User from '@/components/User'
import { getUsers } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const users = await getUsers()
    // console.log(zoos);

    return (
        <div className="mt-5">
            <Link className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black ' href="/users/new"> Nuevo user </Link>
            {
                users.map((user) => (
                    <User key={user.id} user={user} >
                        <Link
                            className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black '
                            href={{ pathname: '/users/edit', query: { id: user.id } }}>
                            Editar user
                        </Link>
                        <Link
                            className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black '
                            href={{ pathname: '/users/delete', query: { id: user.id } }}>
                            Eliminar user
                        </Link>
                    </User>
                ))
            }
        </div>
    )
}