import './Banner.css'
import { Form } from './Form';
export function Banner (){
  return (
    <div className="banner">
      <div className="container mx-auto px-24 h-full flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h1 className="text-gray-200 text-3xl mb-2">Onde você quer ir?</h1>
          <p className="text-green-100">
            Escolha o estado e cidade para achar os melhores resorts.
          </p>
        </div>

        <Form />
      </div>
    </div>
  );
}