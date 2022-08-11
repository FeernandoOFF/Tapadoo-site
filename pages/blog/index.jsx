import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { getFileData, getPostsFiles } from '../../utils/posts';

function Blog({ posts }) {
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
        {posts.map((post, i) => {
          if (!post) return;
          return (
            <Link key={i} href={`/blog/${post.slug}`}>
              <div className="w-full shadow-xl rounded-lg  my-[2vh] lg:max-w-[350px] md:max-w-[300px]">
                <div className="w-full">
                  <img
                    src="https://placeimg.com/400/200/arch"
                    alt=""
                    className="w-full rounded-t-lg"
                  />
                </div>
                <div className="content p-6">
                  <h2 className="app-title text-2xl">{post?.title} </h2>
                  <div className="flex justify-between w-full">
                    <p>{post?.date} </p>
                    <p className="font-semibold text-neutral ">Read More</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  // Get posts within the 'pots' folder
  const postsNames = getPostsFiles();

  // Get metadata from each post
  const posts = postsNames.map((filename) => {
    try {
      const fullMarkdown = getFileData(filename);

      const {
        data: { title, date, categories },
      } = matter(fullMarkdown);

      if (!title || !date) return null;
      return {
        title,
        date,
        slug: filename.replace('.md', ''),
        categories: categories ? categories : null,
      };
    } catch (e) {
      console.error(e);
      return null;
    }
  });

  return {
    props: {
      posts,
    },
  };
};

Blog.getLayout = (page) => <Layout title="Blog | Tapadoo "> {page} </Layout>;
export default Blog;
