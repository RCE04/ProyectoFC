import Button from './Button'

function FormClientes({ action, title, cliente, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={cliente?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={cliente?.nombre} autoFocus ></input>
                <label htmlFor='matricula'>matricula</label>
                <input type='text' id='matricula' name='matricula' min='0'
                    placeholder='matricula'
                    defaultValue={cliente?.matricula} />
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default FormClientes