"use client";

import { useActionState, useState } from "react";
import doRegister from "./do-register";
import "./register.scss"

function CreateUserForm() {
    const [formState, formAction, isPending] = useActionState(doRegister);

    return (
        <>
            <form action={formAction} className="register">
                <lable className="register__data">
                    <span>Firstname</span>
                    <input type="text" name="firstname" className="register__data__input" />
                </lable>
                <lable className="register__data">
                    <span>Lastname</span>
                    <input type="text" name="lastname" className="register__data__input" />
                </lable>
                <lable className="register__data">
                    <span>E-mail</span>
                    <input type="email" name="email" className="register__data__input" />
                </lable>
                <lable className="register__data">
                    <span>Password</span>
                    <input type="password" name="password" className="register__data__input" />
                </lable>
                <button type="submit" className="register__btn">Opret</button>
            </form>
        </>
    );
}

export default CreateUserForm;