import Link from 'next/link'
import Cliente from '@/components/Cliente'
import { getClientes } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const clientes = await getClientes()
    // console.log(zoos);

    return (
        <div className="mt-5">
            <Link className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black ' href="/clientes/new"> Nuevo cliente </Link>
            {
                clientes.map((cliente) => (
                    <Cliente key={cliente.id} cliente={cliente} >
                        <Link
                            className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black '
                            href={{ pathname: '/clientes/edit', query: { id: cliente.id } }}>
                            Editar cliente
                        </Link>
                        <Link
                            className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black '
                            href={{ pathname: '/clientes/delete', query: { id: cliente.id } }}>
                            Eliminar cliente
                        </Link>
                    </Cliente>
                ))
            }
        </div>
    )
}
