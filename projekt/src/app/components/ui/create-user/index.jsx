"use client";

import { useActionState, useState } from "react";
import doRegister from "./do-register";

function CreateUserForm() {
    const [formState, formAction, isPending] = useActionState(doRegister);
 
    return (  
        <>
         <form action={formAction}>
                <div>
                    <lable>Firstname</lable>
                    <input type="text" name="firstname"   />
                </div>
                <div>
                    <lable>Lastname</lable>
                    <input type="text" name="lastname"  />
                </div>
                <div>
                    <lable>E-mail</lable>
                    <input type="email" name="email"  />
                </div>
                <div>
                    <lable>Password</lable>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Opret</button>
            </form>
        </>
    );
}

export default CreateUserForm;