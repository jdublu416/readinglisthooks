import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookListItem from './BookListItem';

const BookList = () => {
    const { books } = useContext(BookContext);
   return books.length ? (
    <div className="book-list">
        <ul>
            {books.map( book => {
                return (
                    <BookListItem book={book} key ={book.id} />
                )
            })}
        </ul>
    </div>
   ) :
   (
       <div className="empty">
           No Books to Read!
       </div>
   )
}
 
export default BookList;
