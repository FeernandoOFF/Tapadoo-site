import React from 'react';
import Link from 'next/link';
import leftArrow from '../../public/img/assets/double-left-arrow.png';
import rightArrow from '../../public/img/assets/double-right-arrow.png.png';

import matter from 'gray-matter';

import { Layout } from '../../components/layout/Layout';
import {
  formatDate,
  getFileData,
  getPostsFiles,
  sortByDate,
} from '../../utils/posts';
import siteData from '../../site-data.json';
import { useRouter } from 'next/router';

// Site
function Blog({ posts, featured, sitePages }) {
  const router = useRouter();
  const currentPageIndex = sitePages.indexOf(+router.query.page);
  console.log(currentPageIndex);

  return (
    <div className="app-container">
      <h2 className="app-title">Blog</h2>
      {/* Featured */}
      {currentPageIndex === 0 && (
        <Link
          key={featured.post.title}
          href={`/blog/post/${featured.post.slug}`}
        >
          <a href="">
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
                <img
                  src={featured.post.postImage}
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div>
          </a>
        </Link>
      )}
      {/* Post Grid */}
      <div className="post-grid flex flex-wrap  justify-between">
        {posts.map((post, i) => {
          if (!post) return;
          return <Post key={i} post={post} />;
        })}
      </div>
      <div className="btn-group  flex-nowrap justify-center my-[10vh]">
        {/* Retrun all */}
        {router.query.page > 1 && (
          <Link href={`/blog/1`}>
            <a className={`btn btn-ghost`}>«</a>
          </Link>
        )}

        {sitePages.map((page, index) => {
          // max of 3 navigation
          if (index > currentPageIndex + 2 || index < currentPageIndex - 2)
            return false;

          return (
            <Link key={page} href={`/blog/${page}`}>
              <a
                className={`btn ${
                  page == router.query.page ? 'btn-active' : 'btn-ghost'
                } `}
              >
                {page}
              </a>
            </Link>
          );
        })}

        {router.query.page != sitePages.length && (
          <Link href={`/blog/${sitePages.length}`}>
            <a className={`btn btn-ghost`}>»</a>
          </Link>
        )}
      </div>
    </div>
  );
}

function Post({ post }) {
  return (
    <Link href={`/blog/post/${post.slug}`}>
      <a href="">
        <div className="w-full shadow-xl rounded-lg  my-[2vh] lg:max-w-[350px] md:max-w-[300px] cursor-pointer">
          <div className="w-full">
            <img
              src={
                post.postImage ||
                'https://cdn-bhcgp.nitrocdn.com/lQsUIlYWTGkhjqgYKmLJkHSBczAwGDPM/assets/static/optimized/rev-f8d7f54/wp-content/uploads/2019/04/tapadoo_background_linkedin.png.webp'
              }
              alt=""
              className="w-full rounded-t-lg max-w-[100%] aspect-video"
            />
          </div>
          <div className="content p-6">
            <h2 className="app-title text-2xl my-3">{post?.title} </h2>
            <div className="flex justify-between w-full">
              <p>{post?.date} </p>
              <p className="font-semibold text-neutral   ">Read More</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const postsNames = getPostsFiles();
  const paths = Array.from(
    Array(Math.ceil(postsNames.length / siteData.blog.pageSize)).keys()
  ).map((i) => ({
    params: { page: `${++i}` },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps = async ({ params: { page } }) => {
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

  const { pageSize } = siteData.blog;

  // Paginator
  const paginator = {
    current: pageSize * page - pageSize,

    top: pageSize * page,
  };

  // Array of site pages based on the page size
  const sitePages = Array.from(
    Array(Math.ceil(postsNames.length / siteData.blog.pageSize)).keys()
  ).map((i) => ++i);

  const postsFormated = posts
    .sort(sortByDate)
    .slice(paginator.current, paginator.top)
    .map((post) => ({ ...post, date: formatDate(post.date) }));

  return {
    props: {
      sitePages,
      posts: postsFormated,
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
