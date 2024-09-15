import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Card } from '@/interfaces/card.type';
import { getRandomCardTemplate } from '@/lib/utils';
import { Textarea } from '../ui/textarea';

interface ThirdProps {
  form: Card;
  setForm: (form: Card) => void;
}

export default function Third({ form, setForm }: ThirdProps) {
  const [title, setTitle] = useState(form.title)
  const [description, setDescription] = useState(form.description)

  const generateCard = () => {
    const card = getRandomCardTemplate()
    setTitle(card.title)
    setDescription(card.description)
    setForm({ ...form, ...card })
  }

  return (
    <div className='flex flex-col gap-4 file:bg-gradient-to-br file:from-orange-500 file:to-pink-500 file:rounded-md file:text-sm file:text-white file:font-medium '>
      <h1 className='text-lg font-medium'>
        3. Vamos criar o seu cartão. Você pode personalizá-lo como quiser ou clicar em Gerar Cartão para gerar um cartão aleatório. 
      </h1>
      <Button
        variant={'link'}
        className='text-orange-500 flex-start'
        onClick={generateCard}
        type='button'
      >
        Gerar Cartão
      </Button>
      <Input
        placeholder='Digite um Título para o seu cartão'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          setForm({ ...form, title: e.target.value })
        }}
      />
      <Textarea
        placeholder='Digite uma descrição para o seu cartão'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
          setForm({ ...form, description: e.target.value })
        }}
      />
    </div>
  )
}
