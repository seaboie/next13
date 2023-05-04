'use client';

import React, { FormEvent, useRef, useState } from 'react'

export default function CheckBox() {

    const checkboxRef = useRef<HTMLInputElement>(null);

    const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert(`This Checkbox is ${checkboxRef.current?.checked ? "checked" : "unchecked"}`)
    }

    return (
        <div className='w-full h-fit bg-slate-300 p-5 rounded-md space-x-5'>
            <form
                onSubmit={formSubmitHandler}
            >
                <div>
                    <div className='flex gap-5'>
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            defaultChecked={true}
                            ref={checkboxRef}
                        />

                        <label htmlFor="checkbox">I agree to Terms of Services.</label>
                    </div>
                </div>
                <input className='bg-blue-600 text-white px-5 py-1 mt-5 rounded-full' type="submit" value="Submit" />
            </form>
        </div>
    )
}
