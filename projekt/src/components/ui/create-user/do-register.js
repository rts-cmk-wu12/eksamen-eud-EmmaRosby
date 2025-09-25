'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import z from "zod";

async function doRegister(prevState, formData) {
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');


    const schema = z.object({
        firstname: z.string().min(1, { message: "Reqired" }),
        lastname: z.string().min(1, { message: "Reqired" }),
        email: z.string().min(1, { message: "Reqired" }),
        password: z.string().min(1, { message: "Reqired" }),
    });

    const validated = schema.safeParse({
        firstname,
        lastname,
        email,
        password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("http://localhost:4000/auth/token");
    const response = await fetch(`${process.env.API_BASE_URL}/users`, {
        headers: {
           "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            firstname: validated.data.firstname,
            lastname: validated.data.lastname,
            email: validated.data.email,
            password: validated.data.password,
        })
    });

    if (response.status !== 201) return {
        success: false,
        errors: ["Der skete en fejl, prøv igen"]
    };

    revalidatePath('http://localhost:3000/');

    return await response.json();
}

export default doRegister;