import { ArrowRight, Copy } from 'lucide-react'
import { Button } from "@/components/button";
import { IconButton } from '@/components/icon-button';
import { Input } from '../components/input';

export default function Home() {
  return (
    <main>
      {/* <div>Hello world!</div>

      <h1 className="text-4xl font-semibold font-heading">Hello World</h1>

      <Button text="Caio"/>
      <Button text="NLW"/>
      <Button text="Enviar"/> */}

      <Button type="submit">
        Enviar
        <ArrowRight/>
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>

      <div>
        <Input type='email' placeholder='Digite seu e-mail'/>
        <Input type='email' placeholder='Digite' error/>
      </div>

    </main>
  );
}