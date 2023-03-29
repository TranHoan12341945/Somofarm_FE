
export function Header(){
  return (
    <div>
      <header className="container mx-auto max-w-6xl px-4 h-24 flex items-center justify-between">
        <h2 className="font-black text-gray-400">LOGO</h2>

        <ul className="gap-3 hidden sm:flex">
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Como reservar
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Informações
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Contato
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}