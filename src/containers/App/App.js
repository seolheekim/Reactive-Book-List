import React, { Component } from 'react';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db';
import BookFilterInput from '../../components/BookFilterInput';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm';
import './App.css';


class App extends Component {
  componentWillMount(){
    // initial state
    this.setState({
      books: [],
      bookFilterText: ''
    });

    getBooksFromFakeXHR()
      .then( books => {
        this.setState({
          books: books
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleFilterInputChange(e){
    this.setState({
      bookFilterText: e.target.value
    })
  }

  addBook(book){
    addBookToFakeXHR(book)
    .then( book => {
      this.setState({
        book:book,
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <div className="container_1">
          <div className="title">
            <BookListAppTitle
              title=" Book List Title "
            />
          </div>
          <BookFilterInput
            filterInputChange={this.handleFilterInputChange.bind(this)}
          />
        </div>

        <div className="container_2">
          <BookList
            filter={this.state.bookFilterText}
            books={this.state.books}
          />
        </div>

        <div className="container_3">
          <h2> SUBMIT NEW BOOK</h2>
          <NewBookForm
            addBook={this.addBook.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
