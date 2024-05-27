

function User({ children, user }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{user.nombre}</strong></p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            {children}
        </div>
    )
}

export default User