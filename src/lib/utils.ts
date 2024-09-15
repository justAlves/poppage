import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomCardTemplate() {
  const cardTemplates = [
    {
      title: "Soluções Personalizadas",
      description: "Oferecemos serviços adaptados às suas necessidades, garantindo qualidade e eficiência."
    },
    {
      title: "Inovação e Criatividade",
      description: "Transformamos ideias em realidade com soluções inovadoras para o seu negócio."
    },
    {
      title: "Compromisso com a Excelência",
      description: "Nosso foco é entregar resultados excepcionais com atenção aos detalhes."
    },
    {
      title: "Suporte Profissional",
      description: "Estamos prontos para ajudar em todas as etapas do seu projeto, oferecendo suporte dedicado."
    },
    {
      title: "Confiabilidade e Qualidade",
      description: "Construímos relações duradouras com base em confiança e entrega de serviços de alta qualidade."
    }
  ];

  const randomIndex = Math.floor(Math.random() * cardTemplates.length);
  return cardTemplates[randomIndex];
}