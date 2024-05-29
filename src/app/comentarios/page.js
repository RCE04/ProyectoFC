import Link from 'next/link'
import Comentario from '@/components/Comentario'
import { getComentariosE } from '@/lib/actions'
import { auth } from '@/auth'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const comentarios = await getComentariosE();
    const session = await auth();
    const userEmail = session?.user?.email;
    const userRole = session?.user?.role;

    console.log(`User Email from session: ${userEmail}`);
    console.log(`User Role from session: ${userRole}`);

    return (
        <div className="mt-5">
            {session && userRole !== 'ADMIN' && (
                <Link
                    className="text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black"
                    href="/comentarios/new"
                >
                    Nuevo comentario
                </Link>
            )}
            {
                comentarios.map((comentario) => (
                    <Comentario key={comentario.id} comentario={comentario}>
                        {session && (userRole === 'ADMIN' || userEmail === comentario.user.email) && (
                            <>
                                <Link
                                    href={{ pathname: '/comentarios/edit', query: { id: comentario.id } }}
                                    className='hover:text-sky-300 px-2 text-center'
                                >
                                    Modificar
                                </Link>
                                <Link
                                    className="text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black"
                                    href={{ pathname: '/comentarios/delete', query: { id: comentario.id } }}
                                >
                                    Eliminar comentario
                                </Link>
                            </>
                        )}
                    </Comentario>
                ))
            }
        </div>
    )
}