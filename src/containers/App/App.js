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

  render() {
    return (
      <div>
        <BookListAppTitle
          title=" Book List Title "
        />

      <BookFilterInput
        filterInputChange={this.handleFilterInputChange.bind(this)}
      />

      <BookList
        filter={this.state.bookFilterText}
        books={this.state.books}
      />

      <NewBookForm

      />

      </div>
    );
  }
}

export default App;
