import React from 'react';
import { Layout } from '../../components/layout/Layout';

function Cases() {
  return (
    <div>
      <div className="carousel carousel-center mt-[20vh] ml-auto w-[100vw] mx-auto py-[10vh]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <AppItem id={i} key={i}></AppItem>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mb-[15vh]">
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
      className={`carousel-item w-4/5  shadow-xl rounded-xl  min-h-[500px] mx-[2vw] p-8 bg-white justify-between  `}
    >
      <div className="w-1/3">
        <h2 className="app-title text-xl md:text-4xl mb-8">App Name{id} </h2>
        <p className="font-semibold text-lg">Client name</p>
        <p className="my-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eos,
          illum minus maxime soluta magni voluptatem dicta tenetur accusamus
          architecto?
        </p>
        <div className="categories flex w-1/3 justify-between">
          <button className="btn btn-ghost border-primary text-primary mr-4">
            Fintech
          </button>
          <button className="btn btn-ghost border-primary text-primary mr-4">
            IOS
          </button>
        </div>
      </div>
      <div className="flex flex-nowrap gap-4">
        <img src="https://placeimg.com/200/150/arch" className="rounded-box" />
        <img src="https://placeimg.com/200/150/arch" className="rounded-box" />
        <img src="https://placeimg.com/200/150/arch" className="rounded-box" />
      </div>
    </div>
  );
}

Cases.getLayout = (page) => (
  <Layout title="Cases of study? | Tapdoo">{page}</Layout>
);
export default Cases;
