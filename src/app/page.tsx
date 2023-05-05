'use client';

import CheckBox from '@/components/checkbox/CheckBox';
import RadioButton from '@/components/radio/RadioButton';
import { ChangeEvent, useState } from 'react';

const allToppings = [
  { name: "Golden Corn", checked: false },
  { name: "Paneer", checked: false },
  { name: "Tomato", checked: false },
  { name: "Mushroom", checked: false },
  { name: "Onion", checked: false },
  { name: "Black Olives", checked: false },
]

export default function Home() {

  const [toppings, setToppings] = useState(allToppings);
  const [selectedTopping, setSelectedTopping] = useState("Golden Corn");

  const updateCheckStatus = (index: number) => {
    setToppings(
      toppings.map((topping, i) => {
        return index === i ? { ...topping, checked: true } : { ...topping, checked: false }
      })
    )
  }

  const handleToppingChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();

    setSelectedTopping(e.target.value)
  }


  return (
    <div className='w-screen h-screen grid place-items-center '>
      <div className='w-1/2'>

        <div className='text-4xl mb-3'>Check Box tutorial</div>

        {
          toppings.map((topping, i) => (
            <CheckBox
              key={topping.name}
              index={i}
              label={topping.name}
              isChecked={selectedTopping === topping.name}
              checkHandler={() => updateCheckStatus(i)}
            />
          ))
        }

        <div>{JSON.stringify(toppings, null, 2)}</div>

        <hr className='my-12' />

        {
          toppings.map((topping, i) => (
            <RadioButton
            key={i.toString()}
              name={topping.name}
              value={topping.name}
              label={topping.name}
              checked={selectedTopping === topping.name}
              onchange={(e) => handleToppingChange(e)}
            />
          ))
        }


      </div>
    </div>
  )
}
