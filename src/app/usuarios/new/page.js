import Form from "@/components/FormUsers"
import { newUser } from "../../../lib/actions"

function page() {
  return (
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-xl font-bold mb-4">Añadir usuario</h3>
      <Form action={newUser} title='Crear usuario' user={null} />
    </div>
  )
}

export default page