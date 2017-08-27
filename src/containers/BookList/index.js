import React, { Component } from 'react';
import Book from '../../components/Book';

class BookList extends Component {
  render(){
    return (
      <ul>
        {
          this.props.books
            .filter(book => {

              if (this.props.filter){
                return book.author.toLowerCase().indexOf(this.props.filter) > -1
              }else{
                return book
              }

              return this.props.filter ? book.author.toLowerCase().indexOf(this.props.filter) > -1 : book;
            })
            .map( book =>{
              return (
                <Book
                  title={book.title}
                  author={book.author}
                  key={book._id}
                />
              );
            })
        }
      </ul>
    );
  }
}

export default BookList;