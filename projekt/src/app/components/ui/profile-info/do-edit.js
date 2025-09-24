'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import z from "zod";

async function editKage(prevState, formData) {
    const name = formData.get('name');
    const slug = formData.get('slug');
    const id = formData.get('id');
    const dough = formData.get('dough');
    const topping = formData.get('topping');
    const price = formData.get('price');

    const schema = z.object({
        name: z.string().min(1, { message: "Navn skal udfyldes" }).max(50, {message: "Navn må max være 50 karakterer"}),
        slug: z.string().min(1, { message: "Slug skal udfyldes" }),
        dough: z.string().min(1, { message: "Dej skal udfyldes" }),
        topping: z.string().min(1, { message: "Glassur skal udfyldes" }),
        price: z.string().min(1, { message: "Pris skal udfyldes" })
    });

    const validated = schema.safeParse({
        name,
        slug,
        dough,
        topping,
        price
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };


    const cookieStore = await cookies();
    const access_token = cookieStore.get("hello");
    const response = await fetch(`http://localhost:4000/kageperson/${id}`, {
        headers: {
            Authorization: "bearer" + access_token.value
        },
        method: "PATCH",
        body: JSON.stringify({
            name: validated.data.name,
            slug: validated.data.slug,
            dough: validated.data.dough,
            topping: validated.data.topping,
            price: parseFloat(validated.data.price)
        })
    });

    if (response.status !== 200) return {
        success: false,
        errors: ["Der skete en fejl, prøv igen"]
    };

    redirect('/dashboard');

}

export default editKage;