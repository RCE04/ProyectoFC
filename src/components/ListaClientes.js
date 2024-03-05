import { getMecanico, getClientes } from '@/lib/actions';

async function ListaClientes({ mecanicoId, disabled }) {
    const clientes = await getClientes();

    let mecanico = null;
    let clienteId = null;

    if (mecanicoId) {
        mecanico = await getMecanico(mecanicoId);
        clienteId = mecanico.clienteId;
    }

    console.log(`CLIENTE del MECANICO ${mecanicoId}: `, clienteId);

    return (
        <fieldset disabled={disabled}>
            <legend>Clientes</legend>
            {clientes?.map((cliente) => (
                <div key={cliente.id}>
                    <p>
                        {clienteId === cliente.id ? (
                            <input type='radio' name='clienteId' value={cliente.id} defaultChecked />
                        ) : (
                            <input type='radio' name='clienteId' value={cliente.id} />
                        )}
                        {cliente.nombre}
                    </p>
                </div>
            ))}
        </fieldset>
    );
}
export default ListaClientes;