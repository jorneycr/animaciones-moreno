import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LanguageContext } from '../contexts/LanguageContext';
import './BlogPost.css';
import blog1 from '../assets/images/blog/blog1.jpg';
import blog2 from '../assets/images/blog/blog2.jpg';
import blog3 from '../assets/images/blog/blog3.jpg';

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useContext(LanguageContext);

  const posts = [
    {
      id: 1,
      title: t['blog_post_1_title'],
      date: t['blog_post_1_date'],
      author: t['blog_post_1_author'],
      image: blog1,
      excerpt: t['blog_post_1_excerpt'],
    },
    {
      id: 2,
      title: t['blog_post_2_title'],
      date: t['blog_post_2_date'],
      author: t['blog_post_2_author'],
      image: blog2,
      excerpt: t['blog_post_2_excerpt'],
    },
    {
      id: 3,
      title: t['blog_post_3_title'],
      date: t['blog_post_3_date'],
      author: t['blog_post_3_author'],
      image: blog3,
      excerpt: t['blog_post_3_excerpt'],
    }
  ];

  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <main className="post-not-found">
        <h1>{t['post_not_found_title']}</h1>
        <p>{t['post_not_found_message']}</p>
        <Link to="/blog">{t['back_to_blog']}</Link>
      </main>
    );
  }

  return (
    <main className="blog-post-detail">
      <h1>{post.title}</h1>
      <p className="post-info">
        {t['blog_post_published']} {post.date} {t['blog_post_by']} {post.author}
      </p>
      <LazyLoadImage
        src={post.image}
        alt={post.title}
        effect="blur"
        className="blog-post-image"
      />
      <p>{post.excerpt}</p>
    </main>
  );
};

export default BlogPost;
