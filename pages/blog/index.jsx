import React from 'react';
import { Layout } from '../../components/layout/Layout';

const posts = [
  {
    id: 1,
    title: 'Important Post',
    highlight: true,
    date: '12-mar-2022',
    slug: 'imp-post',
    extract:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...',
  },
  {
    id: 2,
    title: 'Important Post',
    highlight: true,
    date: '12-mar-2022',
    slug: 'imp-post',
    extract:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...',
  },
  {
    id: 3,
    title: 'Important Post',
    highlight: true,
    date: '12-mar-2022',
    slug: 'imp-post',
    extract:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...',
  },
  {
    id: 4,
    title: 'Important Post',
    highlight: true,
    date: '12-mar-2022',
    slug: 'imp-post',
    extract:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...',
  },
  {
    id: 5,
    title: 'Important Post',
    highlight: true,
    date: '12-mar-2022',
    slug: 'imp-post',
    extract:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...',
  },
  {
    id: 6,
    title: 'Important Post',
    highlight: true,
    date: '12-mar-2022',
    slug: 'imp-post',
    extract:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...',
  },
];

function Blog() {
  return (
    <div className="app-container">
      <h2 className="app-title">Blog</h2>
      <div className="w-full shadow-xl rounded-lg p-8 my-[5vh]">
        <div className="md:w-1/2">
          <h2 className="app-title text-2xl">{posts[0].title} </h2>
          <p className="my-4 font-light opacity-70">{posts[0].extract} </p>
          <div className="flex justify-between w-full">
            <p>{posts[0].date} </p>
            <p className="font-semibold text-neutral ">Read More</p>
          </div>
        </div>
      </div>
      <div className="post-grid flex flex-wrap  justify-between">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full shadow-xl rounded-lg  my-[2vh] lg:max-w-[350px] md:max-w-[300px]"
          >
            <div className="w-full">
              <img
                src="https://placeimg.com/400/200/arch"
                alt=""
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="content p-6">
              <h2 className="app-title text-2xl">{post.title} </h2>
              <p className="my-4 font-light opacity-70">
                {post.extract.length > 100
                  ? post.extract.slice(0, 110)
                  : post.extract}{' '}
              </p>
              <div className="flex justify-between w-full">
                <p>{post.date} </p>
                <p className="font-semibold text-neutral ">Read More</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Blog.getLayout = (page) => <Layout title="Blog | Tapadoo "> {page} </Layout>;
export default Blog;
