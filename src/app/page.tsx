import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="h-auto bg-main flex flex-col text-black">
      <div className="xl:w-1/2 xl:h-full h-1/2 flex flex-col py-52 px-16 gap-8">
        <h1 className="text-5xl font-black text-pink-500"><span className="text-orange-500">Pop</span>Page</h1>
        <p className="text-2xl">Com apenas alguns cliques, você cria uma página para o seu negócio.</p>
        <div className="flex gap-4">
          <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-br from-orange-500 to-pink-500">
            <Button variant={"badge"}>
              Cartão de visita digital.
            </Button>
          </div>
          <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-br from-orange-500 to-pink-500">
            <Button variant={"badge"}>
              Página de negócio.
            </Button>
          </div>
          <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-br from-orange-500 to-pink-500">
            <Button variant={"badge"}>
              Cartão de visita digital + Página de negócio.
            </Button>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 xl:h-full h-1/2 flex flex-col justify-center gap-8 p-32">
        <form className="bg-gray-200 rounded-xl shadow-lg border-2 flex flex-col items-center p-8 gap-4">
          <div className="w-full flex flex-col gap-4">
            <span className="text-lg font-bold">
              1. Vamos começar, informe os dados do seu negócio.
            </span>
            <Input
              placeholder="Digite o nome do seu negócio"
            />
            <Input
              placeholder="Digite um título para a sua página"
            />
            <Input
              type="file"
              placeholder="Escolha uma imagem sua ou o logo do seu negócio"
            />
            <Textarea
              placeholder="Digite uma descrição para a sua página"
              maxLength={110}
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <span className="text-lg font-bold">
              2. Nessa próxima etapa, informe os princípios do seu negócio. Isso ajudará a criar uma página mais personalizada (limite: 3).
            </span>
            <Input
              placeholder="Digite o primeiro princípio"
            />
            <Input
              placeholder="Digite o segundo princípio"
            />
            <Input
              placeholder="Digite o terceiro princípio"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <span className="text-lg font-bold">
              3. Informe os serviços que você oferece. Assim seus clientes saberão o que esperar (limite: 3).
            </span>
            <Input
              placeholder="Digite o primeiro serviço"
            />
            <Input
              placeholder="Digite o segundo serviço"
            />
            <Input
              placeholder="Digite o terceiro serviço"
            />  
          </div>
          <div className="w-full flex flex-col gap-4">
            <span className="text-lg font-bold">
              Por fim, informe os meios de contato para que seus clientes possam entrar em contato com você.
            </span>
            <Input
              placeholder="Digite o seu e-mail"
            />
            <Input
              placeholder="Digite o seu telefone"
            />
            <Input
              placeholder="Possui instagram? Informe o seu usuário"
            />
          </div>
          <Button>
            Crie por apenas R$ 50,00.
          </Button>
        </form>
      </div>
    </div>
  );
}
