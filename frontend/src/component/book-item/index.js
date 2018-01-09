import React from 'react';
import * as util from '../../lib/util.js';

class BookItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {title, author} = this.props.data;

    return(
      <div>
        {util.renderIf((!this.props.data.read), 
          <div className='book-item'>
            <span> {title} by {author} </span>
            <button onClick={() => this.props.bookActions.readBook(this.props.data)}> mark as read </button>
            <button onClick={() => this.props.bookActions.deleteBook(this.props.data)}> delete </button>
          </div>
        )}
        
        {util.renderIf((this.props.data.read), 
          <div className='book-item'>
            <strike> {title} by {author} </strike>
            <button onClick={() => this.props.bookActions.readBook(this.props.data)}> mark as unread </button>
            <button onClick={() => this.props.bookActions.deleteBook(this.props.data)}> delete </button>
          </div>
        )}
      </div>
    )
  }
}

export default BookItem;