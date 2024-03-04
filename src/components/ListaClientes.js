import { getMecanico, getClientes } from '@/lib/actions';

async function ListaClientes({ mecanicoId, disabled }) {
    const clientes = await getClientes();

    let mecanico = null;
    let clienteMecanico = [];

    if (mecanicoId) {
        mecanico = await getMecanico(mecanicoId);
        clienteMecanico = mecanico.clientes?.map((c) => c.id) || [];
    }

    return (
        <fieldset disabled={disabled}>
            <legend>Clientes</legend>
            {clientes?.map((cliente) => (
                <div key={cliente.id}>
                    <p>
                        {clienteMecanico.includes(cliente.id)
                            ? <input type='checkbox' name={cliente.id} value={cliente.id} defaultChecked />
                            : <input type='checkbox' name={cliente.id} value={cliente.id} />
                        }
                        {cliente.nombre}
                    </p>
                </div>
            ))}
        </fieldset>
    );
}

export default ListaClientes;