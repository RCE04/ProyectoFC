'use client';
import { useEffect, useState } from 'react';
import { getComentariosByLugar } from '@/lib/actions';

const ComentariosSection = ({ lugar }) => {
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        async function fetchComentarios() {
            const data = await getComentariosByLugar(lugar);
            setComentarios(data);
        }

        if (lugar) {
            fetchComentarios();
        }
    }, [lugar]);

    return (
        <section className="comentarios-section mt-8 p-4 md:p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#043c54] mb-4">
                Comentarios de {lugar}
            </h2>
            {comentarios.length > 0 ? (
                <ul>
                    {comentarios.map((comentario) => (
                        <li key={comentario.id} className="mb-4 p-4 border rounded shadow">
                            <p className="text-lg md:text-xl text-gray-800">{comentario.texto}</p>
                            <p className="text-sm text-gray-600">{comentario.userEmail}</p>
                            <span className="text-xs text-gray-500">
                                {new Date(comentario.createdAt).toLocaleString()}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">No hay comentarios aún.</p>
            )}
        </section>
    );
};

export default ComentariosSection;