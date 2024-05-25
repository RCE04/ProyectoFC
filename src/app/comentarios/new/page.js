import FormComentario from "@/components/FormComentario"
import { newComentario } from "../../../lib/actions"

function page() {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold">Nuevo Comentario</h3>
      <FormComentario action={newComentario} title='Crear Comentario' comentario={null} />
    </div>
  )
}

export default page