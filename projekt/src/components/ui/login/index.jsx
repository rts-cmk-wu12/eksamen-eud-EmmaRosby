"use client";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import doLogin from "./do-login";
import { toast, ToastContainer } from "react-toastify";
import "./login.scss";
import { redirect } from "next/dist/server/api-utils";

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
                    // redirect("/")
                },
                closeOnClick: false,
                autoClose: 2000,
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
                    <span className="login__data__error">{formState?.properties?.email?.errors}</span>
                </label>
                <label className="login__data">
                    <span>Password</span>
                    <input type="password" name="password" className="login__data__input" defaultValue={formState?.data?.password}/>
                    <span className="login__data__error">{formState?.properties?.password?.errors}</span>
                </label>
                <button type="submit" className="login__btn">Sign in</button>
                <Link href="#" className="login__link">Forgot password?</Link>
                <p>Dont have an account? Register <Link href="/register" className="login__link">here.</Link></p>
                
                 <ToastContainer />
            </form>
        </>
    );
}

export default LoginForm;