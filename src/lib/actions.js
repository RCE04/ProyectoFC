'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// REGISTER: se encarga de insertar los nuevos usuarios en la base de datos
export async function register(formData) {
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const password = formData.get('password');


    const user = await getUserByEmail(email); // Comprobamos si el usuario ya está registrado

    if (user) {
        return { error: 'El email ya está registrado' };
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Encriptamos password 

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            nombre,
            email,
            password: hashedPassword
        }
    });

    return { success: "Registro correcto" };
}

// LOGIN credentials
export async function login(formData) {
    const email = formData.get('email');
    const password = formData.get('password');


    const user = await getUserByEmail(email);// Comprobamos si el usuario está registradoDº

    if (!user) {
        return { error: 'Usuario no registrado.' };
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password);

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials', { email, password, redirectTo: '/' });
    } else {
        return { error: 'Credenciales incorrectas.' };
    }
}

// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: '/' });
    } catch (error) {
        throw error;
    }
}

// LOGIN github
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: '/' });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function loginSpotify() {
    try {
        await signIn('spotify', { redirectTo: '/' });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function loginGitlab() {
    try {
        await signIn('gitlab', { redirectTo: '/' });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' });
    } catch (error) {
        throw error;
    }
}

// Comentarios
export async function getComentarios() {
    try {
        const comentarios = await prisma.comentario.findMany();
        return comentarios;
    } catch (error) {
        return null;
    }
}
export async function getComentariosE() {
    return await prisma.comentario.findMany({
        include: {
            user: {
                select: {
                    email: true,
                },
            },
        },
    });
}
export async function newComentario(formData) {
    try {
        const lugar = formData.get('lugar');
        const texto = formData.get('texto');
        const userEmail = formData.get('userEmail');



        const comentario = await prisma.comentario.create({
            data: {
                lugar,
                texto,
                userEmail
            },
        });

        console.log(comentario);
        revalidatePath('/comentarios');
    } catch (error) {
        console.error('Error al crear el comentario:', error.message)
    }
    redirect('/comentarios')
}

export async function editComentario(formData) {
    const id = formData.get('id');
    const texto = formData.get('texto');
    const lugar = formData.get('lugar');

    try {
        const comentario = await prisma.comentario.update({
            where: { id },
            data: {
                lugar,
                texto
            }
        });
        console.log(comentario);
        revalidatePath('/comentarios');
    } catch (error) {
        console.log(error);
    }
    redirect('/comentarios');
}

export async function deleteComentario(formData) {
    try {
        const id = formData.get('id');

        const comentario = await prisma.comentario.delete({
            where: {
                id: id,
            },
        });
        console.log(comentario);
        revalidatePath('/comentarios');
    } catch (error) {
        console.log(error);
    }

    redirect('/comentarios');
}

export async function getComentariosByLugar(lugar) {
    try {
        const comentarios = await prisma.comentario.findMany({
            where: { lugar },
            orderBy: { createdAt: 'desc' },
        });
        return comentarios;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// USERS

export async function getUsers() {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        return null;
    }
}

export async function newUser(formData) {
    try {
        const nombre = formData.get('nombre');
        const email = formData.get('email');

        const user = await prisma.user.create({
            data: {
                nombre,
                email,
            },
        });
        console.log(user);
        revalidatePath('/usuarios');
    } catch (error) {
        console.log(error);
    }
    redirect('/usuarios');
}

export async function editUser(formData) {
    const id = formData.get('id');
    const nombre = formData.get('nombre');
    const email = formData.get('email');

    try {
        const user = await prisma.user.update({
            where: { id },
            data: {
                nombre,
                email,
            },
        });
        console.log(user);
        revalidatePath('/usuarios');
    } catch (error) {
        console.log(error);
    }
    redirect('/usuarios');
}

export async function deleteUser(formData) {
    try {
        const id = formData.get('id');

        const user = await prisma.user.delete({
            where: {
                id: id,
            },
        });
        console.log(user);
        revalidatePath('/usuarios');
    } catch (error) {
        console.log(error);
    }

    redirect('/usuarios');
}
