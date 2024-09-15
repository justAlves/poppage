'use client';

import CardForm from "@/components/card-form/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="min-h-screen h-auto w-full bg-main py-16 xl:py-52 px-8 flex flex-col text-black">
      <div className="w-full flex flex-col pb-16 gap-8">
        <h1 className="text-5xl font-black text-pink-500"><span className="text-orange-500">Pop</span>Page</h1>
        <p className="text-2xl">Com apenas alguns cliques, você cria uma página para o seu negócio.</p>
        <div className="flex gap-4 flex-wrap">
          <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-br from-orange-500 to-pink-500">
            <Button variant={"badge"} className={`${selectedOption === 'card' && 'bg-gradient-to-br from-orange-500 to-pink-500 text-white'}`} onClick={() => setSelectedOption('card')}>
              Cartão de visita digital.
              R$ 15,90
            </Button>
          </div>
          <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-br from-orange-500 to-pink-500">
            <Button variant={"badge"} className={`${selectedOption === 'site' && 'bg-gradient-to-br from-orange-500 to-pink-500 text-white'}`} onClick={() => setSelectedOption('site')}>
              Página de negócio.
              R$ 49,90
            </Button>
          </div>
          <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-br from-orange-500 to-pink-500">
            <Button variant={"badge"} className={`${selectedOption === 'both' && 'bg-gradient-to-br from-orange-500 to-pink-500 text-white'}`} onClick={() => setSelectedOption('both')}>
              Cartão de visita digital + Página de negócio.
              R$ 59,90
            </Button>
          </div>
        </div>
      </div>
      {selectedOption === 'card' && <CardForm/> }
    </div>
  );
}
