const Header = () => {
  return (
    <div className="header w-full h-screen flex items-center text-white">
      <div className="w-full p-3 md:p-8  flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold transition  uppercase leading-18 tracking-wide drop-shadow-lg">
          Improve Africa Consulting (IAC)
        </h1>
        <h3 className="text-2xl md:text-2xl font-semibold pt-5 pb-5 text-neutral-100 drop-shadow-lg">
          L'expertise au service du développement
        </h3>
        <hr className="global-hr" />
        <p className="w-full md:max-w-[650px] text-lg leading-8 pb-10 drop-shadow-sm">
          Nous sommes un cabinet, spécialisés dans le conseil en matière de
          développement durable, la formation et le renforcement des capacités,
          les services de soutien aux entreprises, ainsi que l'évaluation et le
          reporting d'impact.
        </p>
        <a
          href="/service"
          rel="noopener noreferrer"
          className="w-[300px] h-[50px] flex p-1 cursor-pointer  bg-white rounded-md ring-2"
        >
          <div className="w-1/5 flex justify-center items-center border-r-2">
            <img
              src="/assets/intervention.webp"
              alt=""
              className="w-[32px] h-[32px] object-cover object-center"
            />
          </div>
          <div className="w-4/5 flex items-center justify-center">
            <span className="uppercase font-semibold text-md color_1">
              Domaine d'intervention
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
