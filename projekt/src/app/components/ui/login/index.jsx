"use client";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import doLogin from "./do-login";
import { toast, ToastContainer } from "react-toastify";
import { redirect } from "next/dist/server/api-utils";
import "./login.scss";

function LoginForm() {

    const [formState, formAction, pending] = useActionState(doLogin);

    //Toast Loading
    useEffect(function(){
        const id = pending ? toast.loading("Signing in...", {
            theme: "dark",
            toastId: "loader"
        }) : toast.dismiss();
        
        
        if (!formState?.success) return;
        
        if (!id) {
            toast.success("Welcome", {
                onClose: function(){
                    redirect("/profile")
                },
                closeOnClick: false,
                autoClose: 3000,
                hideProgressBar: true,
                position: "top-right",
                theme: "dark"
            });
        }

    }, [formState, pending])

    return (
        <>
            <form action={formAction} className="login">
                <label className="login__data">
                    <span>Email</span>
                    <input type="text" name="email" className="login__data__input" defaultValue={formState?.data?.email}/>
                    <span>{formState?.properties?.email?.errors}</span>
                </label>
                <label className="login__data">
                    <span>Password</span>
                    <input type="password" name="password" className="login__data__input" defaultValue={formState?.data?.password}/>
                    <span>{formState?.properties?.password?.errors}</span>
                </label>
                <button type="submit" className="">Sign in</button>
                <Link href="/">Forgot password?</Link>
                 <ToastContainer />
            </form>
        </>
    );
}

export default LoginForm;