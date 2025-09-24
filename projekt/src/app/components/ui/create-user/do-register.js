'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import z from "zod";

async function doRegister(prevState, formData) {
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');
    const updatedAt = formData.get('updatedAt');
    const createdAt = formData.get('createdAt');


    const schema = z.object({
        firstname: z.string().min(1, { message: "Reqired" }),
        lastname: z.string().min(1, { message: "Reqired" }),
        email: z.string().min(1, { message: "Reqired" }),
        password: z.string().min(1, { message: "Reqired" }),
       /*  updatedAt: z.string().min(1, { message: "Reqired" }),
        createdAt: z.string().min(1, { message: "Reqired" }), */
    });

    const validated = schema.safeParse({
        firstname,
        lastname,
        email,
        password,
        updatedAt,
        createdAt
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };


    const cookieStore = await cookies();
    const access_token = cookieStore.get("token");
    const response = await fetch(`${process.env.API_BASE_URL}/users`, {
        headers: {
            Authorization: "bearer " + access_token.value
        },
        method: "POST",
        body: JSON.stringify({
            firstname: validated.data.firstname,
            lastname: validated.data.lastname,
            email: validated.data.email,
            password: validated.data.password,
            updatedAt: validated.data.updatedAt,
            createdAt: validated.data.createdAt,
        })
    });

    if (response.status !== 201) return {
        success: false,
        errors: ["Der skete en fejl, prøv igen"]
    };

    revalidatePath('http://localhost:3000/dashboard');

    return await response.json();
}

export default doRegister;