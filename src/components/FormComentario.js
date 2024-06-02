import Button from './Button';
import { auth } from '@/auth';

async function FormComentario({ action, title, comentario, disabled = false }) {
    const session = await auth();
    console.log(session.user.email);

    return (
        <div className="flex min-h-full flex-col justify-center px-6 pb-2 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form action={action} method="post" className="space-y-6">
                    <input type='hidden' name='id' value={comentario?.id} />
                    <input type='hidden' name='userEmail' value={session.user.email} />

                    <div>
                        <label htmlFor='lugar' className="block text-sm font-medium leading-6 text-gray-900">Lugar</label>
                        <div className="mt-2">
                            <select
                                id='lugar'
                                name='lugar'
                                defaultValue={comentario?.lugar}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
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
                        </div>
                    </div>

                    <div>
                        <label htmlFor='texto' className="block text-sm font-medium leading-6 text-gray-900">Texto</label>
                        <div className="mt-2">
                            <textarea
                                id='texto'
                                name='texto'
                                placeholder='Texto del comentario'
                                defaultValue={comentario?.texto}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" title={title} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormComentario;