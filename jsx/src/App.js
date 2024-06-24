/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  
export default App;

*/
import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import GenreFilter from './components/GenreFilter';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  const deleteBook = (id) => {
    if (window.confirm('Esta seguro de eliminar el libro?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  const filteredBooks = filter === 'All' ? books : books.filter(book => book.genre === filter);

  return (
    <div className="app">
      <h1>Catalago de Libros</h1>
      <GenreFilter setFilter={setFilter} />
      <BookList books={filteredBooks} onEdit={setEditingBook} onDelete={deleteBook} />
      <BookForm addBook={addBook} editBook={editBook} editingBook={editingBook} setEditingBook={setEditingBook} />
    </div>
  );
};

export default App;

