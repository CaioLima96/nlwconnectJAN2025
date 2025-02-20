import { ArrowRight, Copy } from 'lucide-react'
import { Button } from "@/components/button";
import { IconButton } from '@/components/icon-button';

export default function Home() {
  return (
    <main>
      {/* <div>Hello world!</div>

      <h1 className="text-4xl font-semibold font-heading">Hello World</h1>

      <Button text="Caio"/>
      <Button text="NLW"/>
      <Button text="Enviar"/> */}

      <Button>
        Enviar 
        <ArrowRight/>
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>

    </main>
  );
}