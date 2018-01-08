import React from 'react';
import BookItem from '../book-item';

class BookDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {Object.keys(this.props.books).map((book,i) =>
          <BookItem 
            key={i} 
            data={this.props.books[book]}
            bookActions={this.props.bookActions}
          />
        )}
      </div>
    )
  }
};

export default BookDisplay;