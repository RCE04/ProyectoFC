import Button from './Button'
import ListaClientes from './ListaClientes'
import { Suspense } from 'react'

function FormMeca({ action, title, mecanico, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={mecanico?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={mecanico?.nombre} autoFocus ></input>
                <label htmlFor='especialidad'>Especialidad</label>
                <input type='text' id='especialidad' name='especialidad'
                    placeholder='Especie'
                    defaultValue={mecanico?.especialidad} />
            </fieldset>
            <Suspense fallback={'Loading ...'}>
                <ListaClientes mecanicoId={mecanico?.id} disabled={disabled} />
            </Suspense>
            <Button title={title} />
        </form>
    )
}

export default FormMeca