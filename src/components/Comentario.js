

function Comentario({ children, comentario }) {
    return (
        <div className="mt-5" style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{comentario.lugar}</strong></p>
            <p>{comentario.texto}</p>
            <p>{comentario.userEmail}</p>
            {children}
        </div>
    )
}

export default Comentario