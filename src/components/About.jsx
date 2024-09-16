import Avatar from "../images/avatar.png";

const About = () => {
  return (
    <div className="flex h-[650px]">
      <div className="m-auto">
        <img
          src={Avatar}
          alt=""
          className="rounded-full h-[250px] w-[250px] mx-auto mb-14"
        />
        <h1 className="cursor-pointer text-[32px] md:text-[64px] font-bold text-center leading-none">
          Hola, soy 
          <span className="transition ease-in-out delay-100 duration-300 hover:text-[#4F0DFF] text-[#4F3DFF]">
            Facundo!
          </span>
        </h1>
        <h2 className="cursor-pointer text-[16px] md:text-[32px] font-bold text-center leading-none">
          Desarrollador web full stack / junior.
        </h2>
      </div>
    </div>
  );
};

export default About;
