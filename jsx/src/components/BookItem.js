import React from 'react';

const BookItem = ({ book, onEdit, onDelete }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <button onClick={() => onEdit(book)}>Editar</button>
      <button onClick={() => onDelete(book.id)}>Eliminar</button>
    </div>
  );
};

export default BookItem;
