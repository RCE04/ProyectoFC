import Button from './Button'
//import ListaClientes from './ListaClientes'
import { Suspense } from 'react'

function FormComentario({ action, title, comentario, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={comentario?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={comentario?.nombre} autoFocus ></input>
                <label htmlFor='especialidad'>Especialidad</label>
                <input type='text' id='especialidad' name='especialidad'
                    placeholder='Especie'
                    defaultValue={comentario?.especialidad} />
            </fieldset>
            {/*<Suspense fallback={'Loading ...'}>
                <ListaClientes comentarioId={comentario?.id} disabled={disabled} />
            </Suspense>*/}
            <Button title={title} />
        </form>
    )
}

export default FormComentario