'use client'

import React, { useState } from 'react'
import GradientContainer from '../gradient-container'
import First from './first'
import { Button } from '../ui/button'
import Second from './second'
import Third from './third'
import Final from './final'
import { Card } from '@/interfaces/card.type'
import { toast } from '@/hooks/use-toast'

export default function CardForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<Card>({
    name: '',
    description:  '',
    title: '',
    userName: '',
    email: '',
    image: '',
    instagram: '',
  })

  const nextStep = () => {
    if(step === 1 && form.name === '' && form.userName === '') {
      toast({
        title: 'Erro',
        description: 'Preencha todos os campos',
        variant: 'destructive',
        duration: 2000
      })
      return
    }

    if(step === 2 && form.image === '' || step === 2 && form.image === undefined) {
      toast({
        title: 'Erro',
        description: 'Selecione uma imagem',
        variant: 'destructive',
        duration: 2000
      })
      return
    }

    if(step === 3 && form.title === '' && form.description === '') {
      toast({
        title: 'Erro',
        description: 'Preencha todos os campos',
        variant: 'destructive',
        duration: 2000
      })
      return
    }

    if(step === 4 && form.email === '') {
      toast({
        title: 'Erro',
        description: 'Informe o seu email',
        variant: 'destructive',
        duration: 2000
      })
      return
    }


    setStep(step + 1)
  }

  const prevStep = () => {
    if(step === 1) return
    setStep(step - 1)
  }

  return (
    <GradientContainer
      rounded='rounded-md'
      className='w-full xl:w-2/3'
    >
      <form className='w-full p-8' action="">
        {step === 1 && <First form={form} setForm={setForm}/>}
        {step === 2 && <Second form={form} setForm={setForm}/>}
        {step === 3 && <Third form={form} setForm={setForm}/>}
        {step === 4 && <Final form={form} setForm={setForm}/>}
        <div className='flex justify-end mt-8 gap-4'>
          {step > 1 && (
            <Button className='bg-rose-500 hover:bg-rose-500/90' type='button' onClick={prevStep}>
              Anterior
            </Button>
          )}
          <Button type='button' onClick={nextStep}>
            Próximo
          </Button>
        </div>
      </form>
    </GradientContainer>
  )
}
