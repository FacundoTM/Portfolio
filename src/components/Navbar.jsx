const Navbar = () => {
  return (
    <nav className="p-5 shadow">
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <h1 className="transition ease-in-out delay-200 text-2xl font-sans font-bold cursor-pointer hover:text-[#4F3DFF]">
          Facundo
        </h1>
        <a
          className="transition ease-in-out delay-200 text-sm font-bold text-zinc-600 hover:text-[#4F3DFF]"
          href="mailto:tmfacundo@gmail.com"
        >
          tmfacundo@gmail.com
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
