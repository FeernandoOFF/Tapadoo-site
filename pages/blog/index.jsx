import React from 'react';
import Link from 'next/link';

import matter from 'gray-matter';

import { Layout } from '../../components/layout/Layout';
import { getFileData, getPostsFiles, sortByDate } from '../../utils/posts';
import siteData from '../../site-data.json';

function Blog({ posts, featured }) {
  return (
    <div className="app-container">
      <h2 className="app-title">Blog</h2>
      <Link key={featured.post.title} href={`/blog/${featured.post.slug}`}>
        <div className="w-full shadow-xl rounded-lg p-8 my-[5vh] md:flex gap-4 cursor-pointer">
          <div className="md:w-1/2 flex flex-col justify-between px-3">
            <div className="">
              <h2 className="app-title text-2xl">{featured.post.title} </h2>
              <p className="my-4 font-light opacity-70 pl-3">
                {featured.extract}
              </p>
            </div>
            <div className="flex justify-between w-11/12 mx-auto">
              <p>{featured.post.date} </p>
              <p className="font-semibold text-neutral ">Read More</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={featured.post.postImage} alt="" className="rounded-md" />
          </div>
        </div>
      </Link>
      <div className="post-grid flex flex-wrap  justify-between">
        {posts.map((post, i) => {
          if (!post) return;
          return (
            <Link key={i} href={`/blog/${post.slug}`}>
              <div className="w-full shadow-xl rounded-lg  my-[2vh] lg:max-w-[350px] md:max-w-[300px] cursor-pointer">
                <div className="w-full">
                  {post.postImage && (
                    <img
                      src={post.postImage}
                      alt=""
                      className="w-full rounded-t-lg"
                    />
                  )}
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
        data: { title, date, categories, postImage },
      } = matter(fullMarkdown);

      if (!title || !date) return null;
      return {
        title,
        date,
        postImage: postImage ? postImage : null,
        slug: filename.replace('.md', ''),
        categories: categories ? categories : null,
        filename,
      };
    } catch (e) {
      console.error(e);
      return null;
    }
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
      featured: {
        post:
          posts.find(
            (post) => post.filename === siteData.blog.featured.fileName
          ) || 'none',
        extract: siteData.blog.featured.extract,
      },
    },
  };
};

Blog.getLayout = (page) => <Layout title="Blog | Tapadoo "> {page} </Layout>;
export default Blog;
