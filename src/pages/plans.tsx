import { Navbar } from "@/components/my/navbar";

export default function plans(){

  return (
    <div className='relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10'>
      <Navbar/>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projetado para equipes de empresas como a sua</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Aqui na FeedbackView, focamos em mercados onde tecnologia, inovação e capital podem desbloquear valor a longo prazo e impulsionar o crescimento econômico.</p>
            </div>
            <section className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* <!-- Plano Gratuito --> */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Gratuito</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Melhor opção para uso pessoal e para seu próximo projeto.</p>
                  <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">R$0,00</span>
                      <span className="text-gray-500 dark:text-gray-400">/mês</span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Limite de questionários: 3</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Limite de respostas por mês: 100</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Exportação de dados (PDF)</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Anúncios nos questionários</span>
                      </li>
                  </ul>
                  <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Começar</a>
              </div>
              {/* <!-- Plano Básico --> */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Básico</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevante para vários usuários, suporte estendido e premium.</p>
                  <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">R$100</span>
                      <span className="text-gray-500 dark:text-gray-400">/mês</span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Limite de questionários: 10</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Limite de respostas por mês: 1500</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Preço por resposta extra: R$0,85</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Suporte ao cliente por email</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Sem anúncios nos questionários</span>
                      </li>
                  </ul>
                  <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Começar</a>
              </div>
              {/* <!-- Plano Premium --> */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Melhor para usos em grande escala e direitos de redistribuição estendidos.</p>
                  <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">R$200</span>
                      <span className="text-gray-500 dark:text-gray-400">/mês</span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Limite de questionários: Ilimitado</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Limite de respostas por mês: 5,000</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Preço por resposta extra: R$0,50</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Suporte ao cliente 24 horas por dia por email</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Personalização de logotipo, cores e URL do questionário</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Análise automática das respostas</span>
                      </li>
                  </ul>
                  <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Começar</a>
              </div>
            </section>
        </div>
      </section>
    </div>
  )
}