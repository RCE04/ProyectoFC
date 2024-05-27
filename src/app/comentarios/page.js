import Link from 'next/link'
import Comentario from '@/components/Comentario'
import { getComentarios } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const clientes = await getComentarios()

    return (
        <div className="mt-5">
            <Link className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black ' href="/comentarios/new"> Nuevo comentario </Link>
            {
                clientes.map((comentario) => (
                    <Comentario key={comentario.id} comentario={comentario} >
                        <Link
                            className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black '
                            href={{ pathname: '/comentarios/edit', query: { id: comentario.id } }}>
                            Editar comentario
                        </Link>
                        <Link
                            className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black '
                            href={{ pathname: '/comentarios/delete', query: { id: comentario.id } }}>
                            Eliminar comentario
                        </Link>
                    </Comentario>
                ))
            }
        </div>
    )
}
