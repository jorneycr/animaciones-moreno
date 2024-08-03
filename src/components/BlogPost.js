import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useContext(LanguageContext);

  // Datos de ejemplo, en una aplicación real deberías obtenerlos de una fuente externa
  const posts = [
    {
      id: 1,
      title: t['blog_post_1_title'],
      date: t['blog_post_1_date'],
      author: t['blog_post_1_author'],
      image: "https://cdn.pixabay.com/photo/2022/01/10/04/37/event-6927353_960_720.jpg",
      excerpt: t['blog_post_1_excerpt'],
    },
    {
      id: 2,
      title: t['blog_post_2_title'],
      date: t['blog_post_2_date'],
      author: t['blog_post_2_author'],
      image: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg",
      excerpt: t['blog_post_2_excerpt'],
    },
    {
      id: 3,
      title: t['blog_post_3_title'],
      date: t['blog_post_3_date'],
      author: t['blog_post_3_author'],
      image: "https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg",
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
      <p className="post-info">{t['blog_post_published']} {post.date} {t['blog_post_by']} {post.author}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.excerpt}</p>
    </main>
  );
};

export default BlogPost;
