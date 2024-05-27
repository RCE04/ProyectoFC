import Form from "@/components/FormUsers"
import { prisma } from '@/lib/prisma'
import { deleteUser } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  console.log(searchParams)
  const user = await prisma.user.findUnique({
    where: {
      id: searchParams.id,
    },
  })

  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold">Eliminar usuario {searchParams.id}</h3>
      <Form action={deleteUser} title='Eliminar usuario' user={user} disabled={true} />
    </div>
  )
}

export default page