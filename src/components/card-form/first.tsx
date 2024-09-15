import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Card } from '@/interfaces/card.type'

interface FirstProps {
  form: Card;
  setForm: (form: Card) => void;
}

export default function First({ form, setForm }: FirstProps) {
  const [name, setName] = useState(form.name)
  const [userName, setUserName] = useState(form.userName)

  return (
    <div className='flex flex-col gap-4 file:bg-gradient-to-br file:from-orange-500 file:to-pink-500 file:rounded-md file:text-sm file:text-white file:font-medium '>
      <h1 className='text-lg font-medium'>
        1. Para começar, conte-nos um pouco sobre você.
      </h1>
      <Input
        placeholder='Digite seu nome'
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value)
          setForm({ ...form, userName: e.target.value })
        }}
      />
      <Input
        placeholder='Digite o nome do seu negócio'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
          setForm({ ...form, name: e.target.value })
        }}
      />
    </div>
  )
}
