import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";

const Activity3 = () => {
  return (
    <div className="activity_3">
      <Navbar />
      <div className="m-h-full p-5">
        <div className="a-title h-[300px] mb-10">
          <div className="img-ctn mw-1200 m-0-auto flex items-center h-full">
            <h2 className="page-title text-4xl font-bold pl-5">
              Etude de marche
            </h2>
            <hr className="" />
          </div>
        </div>
        <div>
          <div className="ctn mw-1200 m-0-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              vitae numquam nihil debitis facere deleniti blanditiis possimus a,
              eos magni exercitationem nulla. Nemo accusamus explicabo modi
              officiis, doloremque cumque dicta culpa distinctio reiciendis
              nesciunt. Fuga deleniti sed asperiores, reprehenderit veniam modi,
              voluptatum ex consequatur aut, veritatis commodi eligendi
              assumenda dicta?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activity3;
