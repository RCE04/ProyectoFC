import FormComentario from "@/components/FormComentario"
import { prisma } from '@/lib/prisma'
import { editComentario } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const comentario = await prisma.comentario.findUnique({
    where: {
      id: searchParams.id,
    },
  })

  return (
    <div className="mt-5">
      < h3 className="text-xl font-bold" > Editar comentario</h3 >
      <FormComentario action={editComentario} title='Editar comentario' comentario={comentario} />
    </div >
  )
}


export default page