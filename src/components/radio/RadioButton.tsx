import React, { ChangeEvent } from 'react'

interface RadioButtonProps {
    name: string;
    value: string;
    label: string;
    checked: boolean;
    onchange(e: ChangeEvent<HTMLInputElement>): void
}

export default function RadioButton({name, checked, label, value, onchange}: RadioButtonProps) {
  return (
    <div className='flex gap-5'>
        <input 
            type="radio" 
            name={name} 
            id={name} 
            value={value}
            checked={checked}
            onChange={onchange}
        />
        <div>{label}</div>
    </div>
  )
}
