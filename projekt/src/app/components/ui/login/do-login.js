"use server";
import { cookies } from "next/headers";
import z from "zod";

async function doLogin(prevState, formData) {

    // step 1: validate
    const { email, password } = Object.fromEntries(formData);

    const schema = z.object({
        email: z.string().min(1, { message: "Brugernavn skal udfyldes" }),
        password: z.string().min(1, { message: "Adgangskode skal udfyldes" })
    })

    const validated = schema.safeParse({
        email,
        password
    });

    // guard clause
    if (!validated.success) return {
        ...validated,
        ...z.treeifyError(validated.error),
        data: {
            email,
            password
        }
    }

    // step 2: Authentication
    const response = await fetch(`${process.env.API_AUTH_URL}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email: validated.data.email,
            password: validated.data.password
        })
    });

    if (!response.ok) return {
        success: false,
        errors: ["Forkert brugernavn eller password"],
        data: {
            email,
            password
        }
    }

    const json = await response.json();

    // step 3: Opret cookies
    const cookieStore = await cookies();
    cookieStore.set({
        name: "id_token",
        value: json.token,
        path: "/",
        secure: true
    });

    cookieStore.set({
        name: "id_userid",
        value: json.userId,
    })


    // Step 4: Redirect

    /* redirect("/"); */

    return {
        success: true,
        data: {
            email,
            password
        }
    }
}

export default doLogin;