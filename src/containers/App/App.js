import React, { Component } from 'react';
import BookFilterInput from '../../components/BookFilterInput';
import './App.css';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db';


class App extends Component {
  constructor() {
    super()
  }

  componentWillMount(){
    // set initial state
    this.setState({
      books: []
    })
  }

  componentDidMount(){

    getBooksFromFakeXHR()
    .then( (books) => {
      this.setState({
        books: books
      })
        console.log("GETBOOK function", books)
      })
      .catch( (err) => {
        console.log(err)
      })

  }

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
    // console.log("THIS IS THE TITLE: ", this.state.bookTitle)
    // console.log("THIS IS THE AUTHOR: ", this.state.bookAuthor)

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
          <button onClick={this.handleBookSubmit.bind(this)}>Submit</button>
        </div>

      <BookFilterInput
        books={this.state.books}
      />
      </div>
    )
  }
}

export default App;
