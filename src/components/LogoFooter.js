import { Link } from "react-router-dom";

const LogoFooter = () => {
  return (
    <Link to="/" className="logo">
      <div className="p-3 rounded-full ring-2 ring-neutral-100">
        <img
          src="/assets/logo_gris.webp"
          alt="logo_iac"
          className="h-[55px] w-[55px] md:h-[75px] md:w-[75px]"
        />
      </div>
    </Link>
  );
};

export default LogoFooter;
