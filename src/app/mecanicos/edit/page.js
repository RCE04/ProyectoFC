import FormMeca from "@/components/FormComentario"
import { prisma } from '@/lib/prisma'
import { editMecanico } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  console.log(searchParams)
  const mecanico = await prisma.mecanico.findUnique({
    where: {
      id: searchParams.id,
    },
  })

  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold">Editar mecanico</h3>
      <FormMeca action={editMecanico} title='Editar mecanico' mecanico={mecanico} />
    </div>
  )
}


export default page