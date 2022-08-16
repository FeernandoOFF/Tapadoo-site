import React from 'react';
import { Layout } from '../../components/layout/Layout';

function Cases() {
  return (
    <div>
      <div className="md:carousel carousel-center flex-col md:flex-row   md:mt-[20vh] ml-auto w-[100vw] mx-auto py-[10vh]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <AppItem id={i} key={i}></AppItem>
        ))}
      </div>
      <div className="hidden md:flex justify-center w-full py-2 gap-2 mb-[15vh]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <a key={i} href={`#item${i}`} className="btn btn-xs bg-gray-200">
            {i}
          </a>
        ))}
      </div>
    </div>
  );
}

function AppItem({ id }) {
  return (
    <div
      id={`item${id}`}
      className={` carousel-item  flex-col md:flex-row w-4/5 my-8  shadow-xl rounded-xl  min-h-[500px] mx-auto md:mx-[2vw] p-8 bg-white justify-between  `}
    >
      <div className="w-full md:text-left text-center  lg:w-1/3">
        <h2 className="app-title text-xl md:text-4xl mb-8">App Name{id} </h2>
        <p className="font-semibold text-lg">Client name</p>
        <p className="my-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eos,
          illum minus maxime soluta magni voluptatem dicta tenetur accusamus
          architecto?
        </p>
        <div className="categories flex w-1/3 justify-between mx-auto md:ml-0">
          <button className="btn btn-ghost border-primary text-primary mr-4">
            Fintech
          </button>
          <button className="btn btn-ghost border-primary text-primary mr-4">
            IOS
          </button>
        </div>
      </div>
      <div className="md:flex  flex-nowrap gap-4 carousel carousel-center mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mockup-phone carousel-item max-w-[270px] ">
            <div className="camera"></div>
            <div className="display">
              <div
                className="artboard artboard-demo phone-1 "
                style={{
                  backgroundImage: 'url("https://placeimg.com/1024/1366/arch")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Cases.getLayout = (page) => (
  <Layout title="Cases of study? | Tapdoo">{page}</Layout>
);
export default Cases;
