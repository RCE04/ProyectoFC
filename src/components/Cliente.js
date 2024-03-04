

function Cliente({ children, cliente }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{cliente.nombre}</strong></p>
            <p>{cliente.matricula}</p>
            {children}
        </div>
    )
}

export default Cliente