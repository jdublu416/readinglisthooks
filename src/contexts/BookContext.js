import React, { createContext, useState, useReducer, useEffect } from 'react';
import uuid from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;

// const [books, setBooks] = useState([
  //   {
  //     title: 'Name of the Wind',
  //     author: 'Patrick Rothfuss',
  //     id: 1
  //   },
  //   {
  //     title: 'The Final Empire',
  //     author: 'Brandon Sanderson',
  //     id: 2
  //   }
  // ]);
  // const addBook = (title, author) => {
  //   setBooks([
  //     ...books,
  //     {
  //       title,
  //       author,
  //       id: uuid.v4()
  //     }
  //   ]);
  // };
  // const deleteBook = id => {
  //   setBooks(books.filter(book => book.id !== id));
  // };
  /* 
  to change things for the use of useReducer hook, you use in lieu of useState...so you remove the hook from the import statement and also the addBook function and deleteBook from the value on line 39
  */
