import React from 'react';
import BookListAppTitle from './BookListAppTitle';

const BookList = (props) => {
  return (
    <div className = "bookList_container" >
      {
        props.books.map( (books) => {
          return (
            <BookListAppTitle
              title={books.title}
              author={books.author}
              key={books._id}
            />
          )
        })
      }
    </div>
  )
}

export default BookList;