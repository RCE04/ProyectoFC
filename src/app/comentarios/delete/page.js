import FormComentario from "@/components/FormComentario"
import { prisma } from '@/lib/prisma'
import { deleteComentario } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  console.log(searchParams)
  const comentario = await prisma.comentario.findUnique({
    where: {
      id: searchParams.id,
    },
  })

  return (
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-xl font-bold mb-4">Eliminar Comentario</h3>
      <FormComentario action={deleteComentario} title='Eliminar comentario' comentario={comentario} disabled={true} />
    </div>
  )
}

export default page