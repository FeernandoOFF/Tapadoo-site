import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// import '../../styles/blog.css';
import { Layout } from '../../../components/layout/Layout';
import { getFileData, getPostsFiles } from '../../../utils/posts';

function BlogPost({ post }) {
  return (
    <div className="p-4 max-w-5xl mx-auto  mt-[5vh]">
      <figure>
        <img
          src={
            post.postImage ||
            'https://cdn-bhcgp.nitrocdn.com/lQsUIlYWTGkhjqgYKmLJkHSBczAwGDPM/assets/static/optimized/rev-f8d7f54/wp-content/uploads/2019/04/tapadoo_background_linkedin.png.webp'
          }
          alt={post.title + 'Tapadoo blog'}
          className="rounded-xl max-w-[90vw] mx-auto w-full"
        />
      </figure>
      <section className="mb-10">
        <h1 className="app-title my-8">{post.title}</h1>
        <h3>{new Date(post.date).getDate()} date </h3>
        <h3>{new Date(post.date).getDay()} day</h3>
        <h3>{post.date} </h3>
        {post.categories && (
          <div className="categories">
            <p className="my-4 text-lg font-medium">Tags : </p>
            {post.categories?.map((category) => (
              <p
                key={category}
                className="p-2 text-xs px-4 bg-neutral rounded-lg inline-block  text-gray-100 font-semibold cursor-pointer"
              >
                {category}
              </p>
            ))}
          </div>
        )}
        <div className="w-full bg-neutral h-[1px] my-8 opacity-60"></div>
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="blog-subtitle ">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="blog-subtitle text-2xl ">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="blog-subtitle text-2xl ">{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className="blog-subtitle text-2xl ">{children}</h5>
            ),
            h6: ({ children }) => (
              <h6 className="blog-subtitle text-2xl ">{children}</h6>
            ),
            p: ({ children }) => (
              <p className="blog-text text-justify">{children}</p>
            ),
            a: ({ children, href }) => (
              <a className="text-primary " href={href}>
                {children}
              </a>
            ),
            li: ({ children }) => (
              <li className="list-disc ml-5 my-1">{children}</li>
            ),
            img: ({ src }) => (
              <img
                src={process.env.siteURL + '/' + src}
                className="my-3 mx-auto"
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </section>
    </div>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  try {
    const posts = getPostsFiles();

    const paths = posts.map((slug) => ({
      params: {
        slug: slug.replace('.md', ''),
      },
    }));
    return {
      paths,
      fallback: 'blocking',
    };
  } catch (e) {
    console.error(e);
  }
};

export const getStaticProps = async ({ params: { slug } }) => {
  try {
    const {
      data: { title, date, ...extra },
      content,
    } = matter(getFileData(slug + '.md'));

    return {
      props: {
        post: {
          title,
          date,
          content,
          ...extra,
        },
      },
    };
  } catch (e) {
    // Error
    console.error(e);
    return {
      props: {
        post: {
          title: '',
          date: '',
          content: '',
        },
      },
    };
  }
};

// BlogPost.getLayout = (page) => (
//   <Layout title="Blog | Tapadoo "> {page} </Layout>
// );

BlogPost.getLayout = (page) => (
  <Layout title="Blog | Tapadoo "> {page} </Layout>
);
export default BlogPost;
