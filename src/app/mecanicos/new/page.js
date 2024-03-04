import FormProfesores from "../../../components/FormMeca"
import { newMecanico } from "../../../lib/actions"

function page() {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold" >Nuevo mecanico</h3>
      <FormProfesores action={newMecanico} title='Crear profesor' mecanico={null} />
    </div>
  )
}

export default page