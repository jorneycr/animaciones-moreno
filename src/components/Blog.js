import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import './Blog.css';

const Blog = () => {
  const { t } = useContext(LanguageContext);

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

  return (
    <main>
      <section className="blog">
        <h1>{t['blog_title']}</h1>
        {posts.map((post) => (
          <article className="blog-post" key={post.id}>
            <h2>{post.title}</h2>
            <p className="post-info">{t['blog_post_published']} {post.date} {t['blog_post_by']} {post.author}</p>
            <img src={post.image} alt={post.title} />
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="read-more">{t['blog_read_more']}</Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Blog;
