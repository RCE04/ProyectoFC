

function Comentario({ children, comentario }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{comentario.nombre}</strong></p>
            <p>{comentario.especialidad}</p>
            {children}
        </div>
    )
}

export default Comentario