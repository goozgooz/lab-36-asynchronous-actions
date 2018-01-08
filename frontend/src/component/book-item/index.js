import React from 'react';

class BookItem extends React.Component{
  constructor(props){
    super(props);
    
    this.handleChange = this.handleDelete.bind(this);
  }
  
  handleDelete(e){
    e.preventDefault();
    this.props.bookActions.deleteBook(this.props.data);
  }

  render(){
    let {title, author} = this.props.data;
    
    return(
      <div className='book-item'>
        <span> {title} by {author} </span>
        <button> read </button>
        <button onClick={() => this.props.bookActions.deleteBook(this.props.data)}> delete </button>
      </div>
    )
  }
}

export default BookItem;