// BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  // Datos de ejemplo, en una aplicación real deberías obtenerlos de una fuente externa
  const posts = [
    {
      id: 1,
      title: "Innovaciones en Animaciones para Eventos",
      date: "15 de Junio, 2024",
      author: "Juan Pérez",
      image: "/images/blog1.jpg",
      content: "Contenido completo del post sobre innovaciones en animaciones para eventos...",
    },
    {
      id: 2,
      title: "10 Consejos para una Boda Perfecta",
      date: "10 de Junio, 2024",
      author: "María González",
      image: "/images/blog2.jpg",
      content: "Contenido completo del post con consejos para una boda perfecta...",
    },
    {
      id: 3,
      title: "Ofertas Especiales para Eventos Escolares",
      date: "5 de Junio, 2024",
      author: "Pedro Rodríguez",
      image: "/images/blog3.jpg",
      content: "Contenido completo del post sobre ofertas especiales para eventos escolares...",
    }
  ];

  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <main className="post-not-found">
        <h1>Post No Encontrado</h1>
        <p>Lo sentimos, el post que estás buscando no existe.</p>
        <Link to="/blog">Volver al Blog</Link>
      </main>
    );
  }

  return (
    <main className="blog-post-detail">
      <h1>{post.title}</h1>
      <p className="post-info">Publicado el {post.date} por {post.author}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </main>
  );
};

export default BlogPost;
