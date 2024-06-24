import React, { useState, useEffect } from 'react';

const BookForm = ({ addBook, editBook, editingBook, setEditingBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setGenre(editingBook.genre);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBook) {
      editBook({ id: editingBook.id, title, author, genre });
      setEditingBook(null);
    } else {
      addBook({ id: Date.now(), title, author, genre });
    }
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Genero" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      <button type="submit">{editingBook ? 'Update' : 'Añadir'}</button>
    </form>
  );
};

export default BookForm;
