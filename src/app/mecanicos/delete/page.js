import FormMeca from "@/components/FormComentario"
import { prisma } from '@/lib/prisma'
import { deleteMecanico } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const mecanico = await prisma.mecanico.findUnique({
    where: {
      id: searchParams.id,
    },
  })

  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold">Eliminar mecanico </h3>
      <FormMeca action={deleteMecanico} title='Eliminar profesor' mecanico={mecanico} disabled={true} />
    </div>
  )
}

export default page