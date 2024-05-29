import Button from './Button'
import { auth } from '@/auth';

async function FormComentario({ action, title, comentario, disabled = false }) {
    const session = await auth();
    console.log(session.user.email);

    return (
        <form action={action} method="post">
            <input type='hidden' name='id' value={comentario?.id} />
            <input type='hidden' name='userEmail' value={session.user.email} />
            <fieldset disabled={disabled}>
                <label htmlFor='lugar'>Lugar</label>
                <select id='lugar' name='lugar' defaultValue={comentario?.lugar} required>
                    <option value="" disabled>Selecciona un lugar</option>
                    <option value="Celda de Cervantes">Celda de Cervantes</option>
                    <option value="Castillo-Muralla">Castillo-Muralla</option>
                    <option value="Parroquia de nuestra señora de la asuncion">Parroquia de nuestra señora de la asuncion</option>
                    <option value="Iglesia de nuestra señora del carmen">Iglesia de nuestra señora del carmen</option>
                    <option value="Convento de Scala Coeli">Convento de Scala Coeli</option>
                    <option value="Triunfo de San Rafael">Triunfo de San Rafael</option>
                    <option value="Barrio de la villa">Barrio de la villa</option>
                    <option value="Museo Antonio Villa-Toro">Museo Antonio Villa-Toro (Iglesia de San Acisclo y Santa Victoria)</option>
                </select>

                <label htmlFor='texto'>Texto</label>
                <textarea id='texto' name='texto'
                    placeholder='Texto del comentario'
                    defaultValue={comentario?.texto}
                    required />
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default FormComentario;
