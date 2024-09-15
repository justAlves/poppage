import React from 'react'
import { Input } from '../ui/input'
import { Card } from '@/interfaces/card.type';

interface SecondProps {
  form: Card;
  setForm: (form: Card) => void;
}

export default function Second({ form, setForm }: SecondProps) {
  return (
    <div className='flex flex-col gap-4'>
      <label className='text-lg font-medium' htmlFor="image">
        2.Importe uma foto sua ou a logo do seu negócio.
      </label>
      <Input 
        type="file" 
        name="image" 
        id="image"
        onChange={(e) => {
          if (!e.target.files) return
          const file = e.target.files[0]
          const reader = new FileReader()
          reader.onloadend = () => {
            setForm({ ...form, image: reader.result as string })
          }
          reader.readAsDataURL(file)
        }}
      />
    </div>
    )
}
