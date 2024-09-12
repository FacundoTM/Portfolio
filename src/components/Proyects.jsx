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
    <div className="h-screen bg-[#0C0A1F]">
      <div className="h-screen w-3/4 bg-[#4F3DFF] m-auto">
        <ArrowButton estilos="m-auto relative top-[-30px] cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" />
        <h1 className="text-white font-bold text-[64px] text-center mb-20">
          Proyectos
        </h1>

        {Proyectos.map((proyecto) => (
          <>
            <div className="grid grid-cols-[25%_auto] w-3/4 bg-white m-auto mt-5">
              <img
                src={proyecto.img}
                alt="Turnos"
                className="h-[180px] w-[180px] m-5"
              />
              <div className="m-5 relative">
                <h1 className="font-bold text-[24px]">{proyecto.titulo}</h1>
                <h2 className="text-[20px]">{proyecto.descripcion}</h2>
                <br />

                <a href={proyecto.link}>
                  <button className="text-white text-[16px] bg-[#4F3DFF] p-3 rounded-md absolute bottom-0 left-0">
                    Visitar
                  </button>
                </a>
                <a href={proyecto.link2}>
                  <button className="ml-3 text-white text-[16px] bg-[#4F3DFF] p-3 rounded-md absolute bottom-0 left-[70px]">
                    Ver codigo en Github
                  </button>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
