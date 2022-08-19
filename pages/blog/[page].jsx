import React from 'react';
import Link from 'next/link';
import leftArrow from '../../public/img/assets/double-left-arrow.png';
import rightArrow from '../../public/img/assets/double-right-arrow.png.png';

import matter from 'gray-matter';

import { Layout } from '../../components/layout/Layout';
import { getFileData, getPostsFiles, sortByDate } from '../../utils/posts';
import siteData from '../../site-data.json';
import { useRouter } from 'next/router';

function Blog({ posts, featured, sitePages }) {
  const router = useRouter();
  const currentPageIndex = sitePages.indexOf(+router.query.page);

  return (
    <div className="app-container">
      <h2 className="app-title">Blog</h2>
      <Link key={featured.post.title} href={`/blog/post/${featured.post.slug}`}>
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
      <div className="post-grid flex flex-wrap  justify-between">
        {posts.map((post, i) => {
          if (!post) return;
          return (
            <Link key={i} href={`/blog/post/${post.slug}`}>
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
                      <p className="font-semibold text-neutral ">Read More</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <div className="paginator w-full max-w-[50vw] mx-auto flex justify-between mt-[10vh] font-semibold items-center">
        {router.query.page > 1 && (
          <Link href={`/blog/1`}>
            <a>
              <img
                src={leftArrow.src}
                alt="Double left arrow"
                aria-label="last blog page"
                className="max-w-[20px] aspect-square"
              />
            </a>
          </Link>
        )}

        {sitePages.map((page, index) => {
          // max of 4 navigation
          if (index > currentPageIndex + 4 || index < currentPageIndex - 4)
            return false;

          return (
            <Link key={page} href={`/blog/${page}`}>
              <a href="">
                <div
                  className={`px-4 py-3  rounded-md cursor-pointer ${
                    page == router.query.page
                      ? 'bg-primary text-white'
                      : 'bg-slate-300'
                  } `}
                >
                  {page}
                </div>
              </a>
            </Link>
          );
        })}
        <Link href={`/blog/${sitePages.length}`}>
          <a>
            <img
              src={rightArrow.src}
              alt="Double right arrow"
              aria-label="last blog page"
              className="max-w-[20px] aspect-square"
            />
          </a>
        </Link>
      </div>
    </div>
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

  console.log(paginator, 'page: ', page);
  return {
    props: {
      sitePages,
      posts: posts.sort(sortByDate).slice(paginator.current, paginator.top),
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
