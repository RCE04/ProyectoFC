import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from 'next/link'
import Mecanico from "@/components/Mecanico.js"
import { getMecanico } from '@/lib/actions'

async function page() {
  const sesion = await auth()
  const mecanicos = await getMecanico()

  if (sesion?.user.role !== 'ADMIN')
    redirect('/mecanicos')

  return (
    <>
      <h2>Bienvenido, {sesion?.user.name}</h2>
      <div className="mt-5">
        <Link className='text-s text-white font-bold mb-4 border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black ' href="/mecanicos/new"> Añadir Mecanico </Link>
        {
          mecanicos.map((mecanico) => (
            <Mecanico key={mecanico.id} mecanico={mecanico} >
              <Link
                className='text-s text-white mr-2 font-bold border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black  '
                href={{ pathname: '/mecanicos/edit', query: { id: mecanico.id } }}>
                Modificar Mecanico
              </Link>
              <Link
                className='text-s font-bold text-white border-2 border-black bg-teal-600 py-1 px-1 hover:bg-white hover:text-black  '
                href={{ pathname: '/mecanicos/delete', query: { id: mecanico.id } }}>
                Eliminar Mecanico
              </Link>
            </Mecanico>
          ))
        }
      </div>
    </>
  )
}

export default page