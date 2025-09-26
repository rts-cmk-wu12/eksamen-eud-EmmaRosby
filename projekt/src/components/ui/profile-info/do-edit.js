'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import z from "zod";

async function doEdit(prevState, formData) {
    const { id, firstname, lastname, email, password } = Object.fromEntries(formData);

    const schema = z.object({
        firstname: z.string().min(1, { message: "Skal udfyldes" }),
        lastname: z.string().min(1, { message: "Skal udfyldes" }),
        email: z.string().min(1, { message: "Skal udfyldes" }),
        password: z.string().min(1, { message: "Skal udfyldes" }),

    });

    const validated = schema.safeParse({
        id,
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
    const accessToken = cookieStore.get("id_token");
    const response = await fetch(`${process.env.API_BASE_URL}/users/${id}`, {
        headers: {
            "Authorization": `Bearer ${accessToken.value}`,
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: {
            firstname: validated.data.firstname,
            lastname: validated.data.lastname,
            email: validated.data.email,
            password: validated.data.password,
        }
    });

    if (response.status !== 200) return {
        success: false,
        errors: ["Error. Try again."]
    };

    revalidatePath('http://localhost:3000/profile');

}

export default doEdit;