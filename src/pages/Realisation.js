import React, { Suspense } from "react";

const Realisation = () => {
  return (
    <div className="h-screen">
      {/* IMAGE */}
      <Suspense>
        <div className="w-full h-[250px] md:h-[400px] p-3 lg:p-8 lg:pb-5 realisation bg-cover bg-center relative">
          <h3 className="absolute left-0 bottom-0 p-3 md:p-8 text-4xl text-white font-bold drop-shadow-md">
            REALISATION
          </h3>
        </div>
      </Suspense>
    </div>
  );
};

export default Realisation;
