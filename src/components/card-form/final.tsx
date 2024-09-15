import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Card } from '@/interfaces/card.type'

interface FinalProps {
  form: Card;
  setForm: (form: Card) => void;
}

export default function Final({ form, setForm }: FinalProps) {
  const [email, setEmail] = useState(form.email)
  const [instagram, setInstagram] = useState(form.instagram)

  return (
    <div className='flex flex-col gap-4 file:bg-gradient-to-br file:from-orange-500 file:to-pink-500 file:rounded-md file:text-sm file:text-white file:font-medium '>
      <h1 className='text-lg font-medium'>
        4. Para finalizar, nos informe o seu email e o usuário do instagram do seu negócio.
      </h1>
      <Input
        placeholder='Digite o seu email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          setForm({ ...form, email: e.target.value })
        }}
      />
      <Input
        placeholder='Possui instagram? Qual é o seu usuário?'
        value={instagram}
        onChange={(e) => {
          setInstagram(e.target.value)
          setForm({ ...form, instagram: e.target.value })
        }}
      />
    </div>
  )
}
