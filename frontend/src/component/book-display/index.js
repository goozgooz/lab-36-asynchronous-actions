import React from 'react';
import BookItem from '../book-item';

class BookDisplay extends React.Component{
  constructor(props){
    super(props);

    // this.state = this.props.books ? this.props.book : {};
    
    this.displayBooks = this.displayBooks.bind(this);
  }

  displayBooks(){
    if(!this.props.books) return;
    for(let book in this.props.books){
      <BookItem data={this.props.books[book]} />
      // <h3> this.props.books[book].title </h3>
      // console.log(this.props.books[book])
    }
  }

  render(){
    return(
      <div>
        {this.displayBooks()}
      </div>
    )
  }
};

export default BookDisplay;