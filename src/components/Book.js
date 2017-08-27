import React from 'react';

const Book = ({ title, author, id }) => {
  return (
    <li>
      <h3>{ title }</h3>
      <p>{ author }</p>
      <p>{ id }</p>
    </li>
  )
}

export default Book;