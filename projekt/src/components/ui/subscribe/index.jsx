"use client";
import { useState } from "react";

function Subscribe() {

    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (e) => {
        const checked = e.target.checked
        setIsChecked(checked)
        console.log(checked);
    }

    return (
        <>
            <form>
                <div>
                    <label>
                        <span>Would you like to subscribe? </span>
                        <input type="checkbox" checked={isChecked} onChange={handleChange} />
                    </label>
                </div>
            </form>
        </>
    );
}

export default Subscribe;