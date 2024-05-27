import Form from "@/components/FormUsers"
import { newUser } from "../../../lib/actions"

function page() {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold">Nuevo usuario</h3>
      <Form action={newUser} title='Crear usuario' user={null} />
    </div>
  )
}

export default page