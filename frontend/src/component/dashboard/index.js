import React from 'react';
import {connect} from 'react-redux';

import * as books from '../../action/books';

import BookForm from '../book-form';
import BookDisplay from '../book-display';

class Dashboard extends React.Component{
  render(){
    return(
      <div>
        <h1> Book Tracker </h1>
        <BookForm bookActions={this.props.bookActions}/>
        <br/>
        <BookDisplay books={this.props.state} bookActions={this.props.bookActions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  bookActions: {
    addBook: book => dispatch(books.create(book)),
    deleteBook: book => dispatch(books.destroy(book)),
    readBook : book => dispatch(books.read(book)),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);