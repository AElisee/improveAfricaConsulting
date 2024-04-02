const Header = () => {
  return (
    <div className="header flex items-center">
      <div className="header-cnt w-full mw-1200 m-0-auto  flex flex-col justify-center pg">
        <h1 className="text-5xl font-bold transition">
          Improve Africa Consulting
        </h1>
        <h3 className="text-3xl font-semibold pt-5 pb-5 text-neutral-100">
          (Cabinet de formation)
        </h3>
        <hr className="global-hr" />
        <p className="desc text-xl  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam
          dolorem sapiente, porro optio soluta provident, perferendis obcaecati
          iste fugiat voluptate illum corrupti nobis atque labore possimus
          deleniti alias cupiditate a rem esse magni. Fuga animi odio quisquam
        </p>
      </div>
      {/* <div className="follow w-full mw-1200 m-0-auto flex pg gap-10">
        <p>Plus d'infos</p>
        <span>
          Aller vers le bas <i className="fa-solid fa-arrow-down-long"></i>{" "}
        </span>
      </div> */}
    </div>
  );
};

export default Header;
