"use client";

import { useActionState } from "react";

function EditProfileForm({userData}) {
    const [formState, formAction, isPending] = useActionState(do-edit);

    return (
        <>
            <form action={formAction}>
                <div>
                    <label>
                        <span>Firstname</span>
                        <input type="hidden" name="firstname" readOnly value={userData.firstname} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Lastname</span>
                        <input type="text" name="lastname" defaultValue={userData.lastname} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>E-mail</span>
                        <input type="text" name="email" defaultValue={userData.email} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password</span>
                        <input type="text" name="password" defaultValue={userData.password} />
                    </label>
                </div>
                <button type="submit">Rediger</button>
            </form>
        </>
    );
}

export default EditProfileForm;