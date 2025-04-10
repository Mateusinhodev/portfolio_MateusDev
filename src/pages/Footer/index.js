import "./style.css"

export default function Footer() {
  return (
    <div className="px-2 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            {"<MateusDev />"}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © 2024 Mateus Dev. Todos os direitos reservados.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0 footer-icons">
          <a href="https://www.linkedin.com/in/mateus-rodrigues-a47002264/" aria-label="LinkedIn">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/Mateusinhodev" aria-label="GitHub">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://twitter.com/Mateusinhodev" aria-label="Twitter">
            <i className='bx bxl-twitter'></i>
          </a>
          <a href="https://www.instagram.com/mateus.mt11/" aria-label="Instagram">
            <i className='bx bxl-instagram-alt'></i>
          </a>
        </div>
      </div>
    </div>
  );
}