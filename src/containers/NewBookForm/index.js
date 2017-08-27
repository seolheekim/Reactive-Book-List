import React, { Component } from 'react';
import Book from '../../components/Book';

class NewBookForm extends Component {

  handleTitleChange(c) {
    this.setState({
      bookTitle: c.target.value
    })
  }

  handleAuthorChange(c) {
    this.setState({
      bookAuthor: c.target.value
    })
  }


  handleBookSubmit() {

    let newBooks = {
      title: this.state.bookTitle,
      author: this.state.bookAuthor
    }
    this.setState({
      books: [...this.state.books, newBooks]
    })
  }

  render() {
    return (
      <div>
         <div className="book-form">
            <input
              type='text'
              name='title'
              placeholder='BOOK TITLE'
              onChange={this.handleTitleChange.bind(this)}
            />
            <br />
            <input
              type="text"
              name="author"
              placeholder="AUTHOR OF THE BOOK"
              onChange={this.handleAuthorChange.bind(this)}
            />
          <br />
        </div>
        <button onClick={this.handleBookSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default NewBookForm;
