import React, { useEffect, useState } from 'react';
import './Posts.css';

function Posts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users'),
        ]);

        if (!postsRes.ok || !usersRes.ok) {
          throw new Error('İstek başarısız');
        }

        const [posts, users] = await Promise.all([
          postsRes.json(),
          usersRes.json(),
        ]);

        const joined = posts.map((p) => ({
          ...p,
          user: users.find((u) => u.id === p.userId),
        }));

        setItems(joined);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="info">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="info hata">Bir hata oluştu.</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Gönderiler</h1>
      <ul className="list">
        {items.map((it) => (
          <li key={it.id} className="card">
            <div className="meta">
              <span className="user">{it.user?.name || 'Bilinmeyen Kullanıcı'}</span>
              <span className="email">{it.user?.email || ''}</span>
            </div>
            <h2 className="title">{it.title}</h2>
            <p className="body">{it.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;


