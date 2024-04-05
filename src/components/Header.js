const Header = () => {
  return (
    <div className="header flex items-center">
      <div className="header-cnt w-full mw-1200 m-0-auto  flex flex-col justify-center pg">
        <h1 className="text-5xl font-bold transition  uppercase">
          Improve Africa Consulting (IAC)
        </h1>
        <h3 className="text-xl font-semibold pt-5 pb-5 text-neutral-100">
          L'expertise au service du développement
        </h3>
        <hr className="global-hr" />
        <p className="desc text-xl pb-10">
          Nous sommes un cabinet, spécialisés dans le conseil en matière de
          développement durable, la formation et le renforcement des capacités,
          les services de soutien aux entreprises, ainsi que l'évaluation et le
          reporting d'impact.
        </p>
        <div className="area bg-white rounded-md">
          <div className="icon">
            <span>icon</span>
          </div>
          <div className="txt pl-3">
            <span className="uppercase font-semibold text-lg color_1">
              Domaine d'intervention
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
