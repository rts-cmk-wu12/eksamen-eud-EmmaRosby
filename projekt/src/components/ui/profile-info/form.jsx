"use client";
import "./form.scss";
import { useActionState } from "react";
import doEdit from "./do-edit";

function EditProfileForm({ userData }) {
    const [formState, formAction, isPending] = useActionState(doEdit);

    return (
        <>
            <form action={formAction} className="edit">
                <label className="edit__data">
                    <span>Firstname</span>
                    <input type="text"
                        name="firstname"
                        defaultValue={userData.firstname}
                        className="edit__data__input"
                    />
                </label>
                <label className="edit__data">
                    <span>Lastname</span>
                    <input type="text"
                        name="lastname"
                        defaultValue={userData.lastname}
                        className="edit__data__input"
                    />
                </label>
                <label className="edit__data">
                    <span>E-mail</span>
                    <input type="text"
                        name="email"
                        defaultValue={userData.email}
                        className="edit__data__input"
                    />
                </label>
                <label className="edit__data">
                    <span>Password</span>
                    <input type="text"
                        name="password"
                        placeholder="Change password?"
                        className="edit__data__input"
                    />
                </label>
                <button type="submit" className="edit__btn">Save</button>
            </form>
        </>
    );
}

export default EditProfileForm;