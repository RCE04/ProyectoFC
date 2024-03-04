

function Mecanico({ children, mecanico }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{mecanico.nombre}</strong></p>
            <p>{mecanico.especialidad}</p>
            {children}
        </div>
    )
}

export default Mecanico