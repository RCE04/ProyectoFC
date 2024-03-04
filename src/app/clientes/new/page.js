import FormClientes from "@/components/FormClientes"
import { newCliente } from "../../../lib/actions"

function page() {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold">Nuevo cliente</h3>
      <FormClientes action={newCliente} title='Crear alumno' cliente={null} />
    </div>
  )
}

export default page