export function Form(){
  return (
    <form className="flex items-center justify-center gap-2 py-10">
      <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
        <option value="">Escolha o estado</option>
      </select>
      <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
        <option value="">Escolha a cidade</option>
      </select>

      <button className="text-yellow-900 bg-yellow-400 font-medium px-3 py-2 rounded flex items-center">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        Pesquisar resorts
      </button>
    </form>
  );
}