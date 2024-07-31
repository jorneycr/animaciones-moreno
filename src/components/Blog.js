// Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Innovaciones en Animaciones para Eventos",
      date: "15 de Junio, 2024",
      author: "Juan Pérez",
      image: "/images/blog1.jpg",
      excerpt: "En Animaciones Moreno, estamos siempre en la búsqueda de las últimas innovaciones para hacer de tus eventos una experiencia inolvidable...",
    },
    {
      id: 2,
      title: "10 Consejos para una Boda Perfecta",
      date: "10 de Junio, 2024",
      author: "María González",
      image: "/images/blog2.jpg",
      excerpt: "Organizar una boda puede ser una tarea abrumadora, pero con nuestros consejos podrás asegurarte de que todo salga perfecto...",
    },
    {
      id: 3,
      title: "Ofertas Especiales para Eventos Escolares",
      date: "5 de Junio, 2024",
      author: "Pedro Rodríguez",
      image: "/images/blog3.jpg",
      excerpt: "Aprovecha nuestras ofertas especiales para eventos escolares. Hacemos de cada celebración una ocasión única y memorable...",
    }
  ];

  return (
    <main>
      <section className="blog">
        <h1>Blog</h1>
        {posts.map((post) => (
          <article className="blog-post" key={post.id}>
            <h2>{post.title}</h2>
            <p className="post-info">Publicado el {post.date} por {post.author}</p>
            <img src={post.image} alt={post.title} />
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="read-more">Leer más</Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Blog;
