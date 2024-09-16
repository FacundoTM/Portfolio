import IMG from "../images/ToDO.jpg";
import IMG2 from "../images/Turnos.jpg";
import IMG3 from "../images/Weather.jpg";

const Proyectos = [
  {
    titulo: "Listado de tareas",
    descripcion:
      "Una aplicación sencilla que guardará todas las notas que desees. Creado con React y LocalStorage.",
    link: "https://facundotm.github.io/ListaDeTareas/",
    link2: "https://github.com/FacundoTM/ListaDeTareas",
    img: IMG,
  },
  {
    titulo: "Sistema de turnos",
    descripcion: "Una aplicación para gestionar turnos. Express | React",
    link: "https://turnos-lh9a.onrender.com/",
    link2: "https://github.com/FacundoTM/Turnos",
    img: IMG2,
  },
  {
    titulo: "Aplicación de clima",
    descripcion: "Una aplicación para ver el clima. React.",
    link: "https://frontweather-0i41.onrender.com/",
    link2: "https://github.com/FacundoTM/FrontWeather",
    img: IMG3,
  },
];

import ArrowButton from "./ArrowButton";

const Proyects = () => {
  return (
    <div className="h-screen bg-white md:bg-[#0C0A1F]">
      <div className="h-screen w-3/4 bg-white md:bg-[#4F3DFF] m-auto">
        <ArrowButton estilos="border-2 rounded-full border-slate-700 md:border-transparent m-auto relative top-[-30px] cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" />
        <h1 className="text-white font-bold text-[64px] text-center mb-20">
          Proyectos
        </h1>

        {Proyectos.map((proyecto) => (
          <div
            key={proyecto.titulo}
            className="w-3/4 md:max-w-full md:flex m-auto mb-2"
            //className="max-w-sm w-full lg:max-w-full lg:flex "
          >
            <div
              className="h-48 md:h-auto md:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${proyecto.img})` }}
              title={proyecto.titulo}
            ></div>
            <div className="lg:w-3/4 border-r border-b border-l  lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {proyecto.titulo}
                </div>
                <p className="text-gray-700 text-base">
                  {proyecto.descripcion}
                </p>
              </div>
              <div className="flex items-center">
                <a href={proyecto.link}>
                  <button className="transition ease-in-out delay-100 duration-300 text-white text-[16px] hover:opacity-85 bg-[#4F3DFF] p-3 rounded-md bottom-0 left-0">
                    Visitar
                  </button>
                </a>
                <a href={proyecto.link2}>
                  <button className="text-ellipsis overflow-hidden whitespace-nowrap max-w-32 md:max-w-60 transition ease-in-out delay-100 duration-300 ml-3 text-white text-[16px] hover:opacity-85 bg-[#4F3DFF] p-3 rounded-md bottom-0 left-[70px]">
                    Ver codigo en Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
