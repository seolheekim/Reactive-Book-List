import React from 'react';

const Book = ({ title, author, id }) => {
  return (
    <li>
      <h3> {title} </h3>
      <p> by {author} </p>
    </li>
  )
}

export default Book;