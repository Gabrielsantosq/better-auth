import { Link } from "react-router"
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 items-center flex justify-center mt-50">
      <div className="flex flex-col gap-4 items-start border rounded-lg p-8 w-full max-w-xl shadow-md">

        <h1 className="text-3xl ">Bem vindo ao Better auth</h1>
        <p className="text-gray-600">Uma aplicação simples para testar autenticação.</p>
        <div className="flex flex-row gap-4">
          <Link
            to="/sign-up"
            className="rounded-md bg-green-500 py-2 px-4 text-white hover:bg-green-700"
          >
            Criar uma conta
          </Link>

          <Link
            to="/sign-in"
            className="rounded-md border text-gray-700 py-2 px-4  hover:bg-gray-100"
          >
            Entrar
          </Link>
        </div>

      </div>

    </main>
  )
}
