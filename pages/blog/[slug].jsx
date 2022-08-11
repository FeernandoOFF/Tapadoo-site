import matter from 'gray-matter';
import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { getFileData, getPostsFiles } from '../../utils/posts';

function BlogPost({ post }) {
  console.log(post);
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.content} </p>
    </div>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
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
};

export const getStaticProps = async ({ params: { slug } }) => {
  const {
    data: { title, date },
    content,
  } = matter(getFileData(slug + '.md'));

  return {
    props: {
      post: {
        title,
        date,
        content,
      },
    },
  };
};

// BlogPost.getLayout = (page) => (
//   <Layout title="Blog | Tapadoo "> {page} </Layout>
// );
export default BlogPost;
