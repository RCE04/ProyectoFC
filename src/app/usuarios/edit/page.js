import FormClientes from "@/components/FormClientes"
import { prisma } from '@/lib/prisma'
import { editCliente } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: searchParams.id,
    },
  })

  return (
    <div className="mt-5">
      < h3 className="text-xl font-bold" > Editar cliente</h3 >
      <FormClientes action={editCliente} title='Editar cliente' cliente={cliente} />
    </div >
  )
}


export default page