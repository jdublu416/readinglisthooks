import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  // const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // addBook(title, author);
    dispatch({ type: 'ADD_BOOK', book: { title, author } });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 style={{ textAlign: 'center' }}>Enter a book...</h3>
      <input
        type='text'
        placeholder='book title...'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='book author...'
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type='submit' value='Add Book' />
    </form>
  );
};

export default BookForm;
