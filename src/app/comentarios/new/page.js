import FormComentario from "@/components/FormComentario"
import { newComentario } from "../../../lib/actions"

function Page() {
  return (
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-xl font-bold mb-4">Nuevo Comentario</h3>
      <FormComentario action={newComentario} title='Crear Comentario' comentario={null} />
    </div>
  );
}

export default Page