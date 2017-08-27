import React from 'react';

const BookListAppTitle = ({ title, author, _id }) => {
  return (
    <div className="book-list_item">
        <h2> {title} </h2>
        <p> {author} </p>
        <p> {_id} </p>
    </div>
  )
}

export default BookListAppTitle;