import matter from 'gray-matter';
import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { getFileData, getPostsFiles } from '../../utils/posts';

function BlogPost({ post }) {
  return (
    <div>
      <img src={post.postImage} alt="" />
      <p>{post.title}</p>
      <p>{post.content} </p>
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
