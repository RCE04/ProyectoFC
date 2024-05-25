import FormClientes from "@/components/FormClientes"
import { prisma } from '@/lib/prisma'
import { deleteCliente } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  console.log(searchParams)
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: searchParams.id,
    },
  })

  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold">Eliminar cliente {searchParams.id}</h3>
      <FormClientes action={deleteCliente} title='Eliminar cliente' cliente={cliente} disabled={true} />
    </div>
  )
}

export default page