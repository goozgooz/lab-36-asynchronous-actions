import React from 'react';
import {connect} from 'react-redux';

import * as books from '../../action/books';

import BookForm from '../book-form';
import BookDisplay from '../book-display';

class Dashboard extends React.Component{
  render(){
    return(
      <div>
        <BookForm book={this.props.bookActions}/>
        <BookDisplay books={this.props.state} />
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);