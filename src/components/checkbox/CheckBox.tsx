'use client';

import React, { FormEvent, useRef, useState } from 'react';

interface CheckboxProps {
    label: string;
    isChecked: boolean;
    checkHandler(): void;
    index: number
}

export default function CheckBox({label, isChecked, checkHandler, index}: CheckboxProps) {

    return (

        <div className='flex gap-5'>
            <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={isChecked}
                onChange={checkHandler}
            />

            <label htmlFor={`checkbox-${index}`}>{label}</label>
        </div>

    )
}
