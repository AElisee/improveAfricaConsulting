const Header = () => {
  return (
    <div className="header w-full h-screen pb-10 flex text-white">
      <div className="w-full p-3 md:p-8  flex flex-col justify-end mb-10">
        <h1 className="text-xl md:text-3xl font-bold transition  uppercase leading-18 tracking-wide drop-shadow-lg">
          Improve Africa Consulting (IAC)
        </h1>
        <h3 className="text-lg font-semibold pt-5 pb-3 text-neutral-100 drop-shadow-lg">
          L'expertise au service du développement
        </h3>
        <hr className="global-hr" />
        <p className="w-full md:max-w-[650px] text-sm leading-6 pb-4 drop-shadow-sm">
          Nous sommes un cabinet, spécialisé dans le conseil en matière de
          développement durable, la formation et le renforcement des capacités,
          les services de soutien aux entreprises, ainsi que l'évaluation et le
          reporting d'impact.
        </p>
        <div className="w-[300px] h-[50px] flex p-1 cursor-pointer  bg-white rounded-md ring-2">
          <a
            href="/service"
            rel="noopener noreferrer"
            className="w-1/5 flex justify-center items-center border-r-2"
          >
            <img
              src="/assets/intervention.webp"
              alt=""
              className="w-[32px] h-[32px] object-cover object-center"
            />
          </a>
          <div className="w-4/5 flex items-center justify-center">
            <a
              href="/service"
              rel="noopener noreferrer"
              className="uppercase font-semibold text-sm md:text-sm color_1"
            >
              Domaine d'intervention
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
