import Button from './Button'

function FormUsers({ action, title, user, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={user?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={user?.nombre} autoFocus ></input>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' min='0'
                    placeholder='Email'
                    defaultValue={user?.email} />
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default FormUsers