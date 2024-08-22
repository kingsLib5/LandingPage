import React from 'react';

function Registerbody() {
  return (
    <>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 h-[75vh]">
        <div className="flex flex-col gap-4 justify-center items-center mx-4 md:mx-[60px] lg:mx-[120px] p-4">
          <div className="flex font-bold w-full md:min-w-[400px] h-[30px] justify-start items-center">
            <h4 className="text-lg md:text-xl">Become an Instructor</h4>
          </div>
          <div className="flex w-full md:min-w-[250px] h-auto justify-start items-center">
            <h6 className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              Fugit in magni sint corporis consequatur temporibus aperiam
            </h6>
          </div>
          <div className="flex justify-start items-center w-full md:min-w-[400px]">
            <button className="bg-orange-500 flex h-[40px] w-[100px] justify-center items-center text-white">
              Get started
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 md:p-0">
          <div className="bg-[url(./assets/lad.jpg)] bg-cover bg-center bg-no-repeat w-full h-[200px] md:h-[300px] lg:h-[400px]"></div>
        </div>
      </div>
    </>
  );
}

export default Registerbody;
