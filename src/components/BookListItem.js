import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

const BookListItem = ({book}) => {
    const {dispatch} =useContext(BookContext)
    return (
        <li onClick={() => dispatch({type: "REMOVE_BOOK", id: book.id})}>
            <div className="title">{book.title}</div>
            <div className="author"> by: {book.author}</div><br/>
        </li>
    )
}

export default BookListItem
