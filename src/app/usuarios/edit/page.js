import FormClientes from "@/components/FormUsers"
import { prisma } from '@/lib/prisma'
import { editUser } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const user = await prisma.user.findUnique({
    where: {
      id: searchParams.id,
    },
  })

  return (
    <div className="mt-5">
      < h3 className="text-xl font-bold" > Editar user</h3 >
      <FormClientes action={editUser} title='Editar cliente' user={user} />
    </div >
  )
}


export default page