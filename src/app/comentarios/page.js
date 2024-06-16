import Link from 'next/link';
import Comentario from '@/components/Comentario';
import { getComentariosE } from '@/lib/actions';
import { auth } from '@/auth';
import FormComentario from "@/components/FormComentario"
import { newComentario } from "@/lib/actions"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic';

export default async function Home() {
    const comentarios = await getComentariosE();
    const session = await auth();
    const userEmail = session?.user?.email;
    const userRole = session?.user?.role;

    console.log(`User Email from session: ${userEmail}`);
    console.log(`User Role from session: ${userRole}`);

    const userComentarios = comentarios.filter(comentario => comentario.user.email === userEmail);

    if (session?.user.role !== 'ADMIN' && session?.user.role !== 'USER') {
        redirect('/auth/login')
    }
    return (
        <div className="my-5">
            {session && userRole === 'ADMIN' ? (
                <>
                    <Link
                        className="text-s text-white font-bold mb-10 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black transition-all duration-200"
                        href="/comentarios/new"
                    >
                        Nuevo comentario
                    </Link>
                    {comentarios.map((comentario) => (
                        <Comentario key={comentario.id} comentario={comentario}>
                            <Link
                                href={{ pathname: '/comentarios/edit', query: { id: comentario.id } }}
                                className="text-s text-white font-bold mt-4 mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black transition-all duration-200"
                            >
                                Modificar
                            </Link>
                            <Link
                                className="text-s text-white font-bold mx-4 mt-4 mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black transition-all duration-200"
                                href={{ pathname: '/comentarios/delete', query: { id: comentario.id } }}
                            >
                                Eliminar
                            </Link>
                        </Comentario>
                    ))}
                </>
            ) : (
                <>
                    <div className="flex flex-col items-center mt-5">
                        <h3 className="text-xl font-bold mb-4">Nuevo Comentario</h3>
                        <FormComentario action={newComentario} title='Crear Comentario' comentario={null} />
                    </div>
                    <h3 className="text-xl pl-5 font-bold my-4">Tus comentarios</h3>
                    {userComentarios.length > 0 ? (
                        userComentarios.map((comentario) => (
                            <Comentario key={comentario.id} comentario={comentario}>
                                <Link
                                    href={{ pathname: '/comentarios/edit', query: { id: comentario.id } }}
                                    className="text-s text-white font-bold mt-4 mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black transition-all duration-200"
                                >
                                    Modificar
                                </Link>
                                <Link
                                    className="text-s text-white font-bold mx-4 mt-4 mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black transition-all duration-200"
                                    href={{ pathname: '/comentarios/delete', query: { id: comentario.id } }}
                                >
                                    Eliminar
                                </Link>
                            </Comentario>
                        ))
                    ) : (
                        <p className='pl-5'>No has escrito ningún comentario.</p>
                    )}
                </>
            )}
        </div>
    );
}