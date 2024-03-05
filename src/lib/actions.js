'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// REGISTER
export async function register(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: 'El email ya está registrado' }
    }

    // Encriptamos password 
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "Registro correcto" }
}


// LOGIN credentials
export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario está registrado
    const user = await getUserByEmail(email);

    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials', { email, password, redirectTo: '/' })
        // return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }

}


// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: '/' })
    } catch (error) {
        throw error
    }
}

// LOGIN github
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: '/' })
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function loginSpotify() {
    try {
        await signIn('spotify', { redirectTo: '/' })
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function loginGitlab() {
    try {
        await signIn('gitlab', { redirectTo: '/' })
    } catch (error) {
        console.log(error);
        throw error
    }
}


// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' })
    } catch (error) {
        throw error
    }
}


//Profesores == Mecanicos
export async function getMecanico() {
    try {
        const mecanicos = await prisma.mecanico.findMany()
        return mecanicos;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function getClienteIds() {
    const clientes = await prisma.cliente.findMany();
    return clientes.map(cliente => cliente.id);
}

export async function getClientes() {
    try {
        const clientes = await prisma.cliente.findMany()
        return clientes;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function newCliente(formData) {
    try {
        const nombre = formData.get('nombre');
        const matricula = formData.get('matricula');

        const cliente = await prisma.cliente.create({
            data: {
                nombre,
                matricula,
            },
        });
        console.log(cliente);
        revalidatePath('/clientes')
    } catch (error) {
        console.log(error);
    }
    redirect('/clientes');
}

export async function newMecanico(formData) {
    try {
        const nombre = formData.get('nombre');
        const especialidad = formData.get('especialidad');
        const clienteId = formData.get('clienteId')

        const ids = await getClienteIds();
        console.log('IDs ', ids);


        const mecanico = await prisma.mecanico.create({
            data: {
                nombre,
                especialidad,
                /* cliente: {
                     id: clienteId
                 },*/
            },
            /* include: {
                 cliente: true,
             },*/

        });

        console.log(mecanico);
        revalidatePath('/mecanicos');
    } catch (error) {
        console.error('Error al crear el mecánico:', error.message);
    }
    redirect('/mecanicos');
}

export async function editCliente(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const matricula = formData.get('matricula');


    try {
        const cliente = await prisma.cliente.update({
            where: { id },
            data: {
                nombre, matricula,
            },
        });
        console.log(cliente);
        revalidatePath('/clientes')
    } catch (error) {
        console.log(error);
    }
    redirect('/clientes');
}

export async function editMecanico(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')


    const ids = await getClienteIds()
    console.log('IDs ', ids);

    const checks = ids.map(id => formData.get(id.toString()))
        .filter(id => id !== null)
        .map(id => id)
    console.log('CHECKS ', checks);

    const connect = checks.map(id => { return { id: id } })
    console.log('CONNECT ', connect);

    const difference = ids.filter(id => !checks.includes(id));
    const disconnect = difference.map(id => { return { id: id } })
    console.log('DISCONNECT ', disconnect);


    try {
        const mecanico = await prisma.mecanico.update({
            where: { id },
            data: {
                nombre,
                especialidad
             /*cliente: {
                    connect,
                    disconnect,
                },*/ },
            /*  include: {
  cliente: true,
},*/
        })
        console.log(mecanico);
        revalidatePath('/mecanicos')
    } catch (error) {
        console.log(error);
    }
    redirect('/mecanicos');
}

export async function deleteCliente(formData) {
    try {
        const id = formData.get('id')

        const cliente = await prisma.cliente.delete({
            where: {
                id: id,
            },
        })
        console.log(cliente);
        revalidatePath('/clientes')
    } catch (error) {
        console.log(error);
    }

    redirect('/clientes');
}

export async function deleteMecanico(formData) {
    try {
        const id = formData.get('id')

        const mecanico = await prisma.mecanico.delete({
            where: {
                id: id,
            },
        })
        console.log(mecanico);
        revalidatePath('/mecanicos')
    } catch (error) {
        console.log(error);
    }

    redirect('/mecanicos');
}