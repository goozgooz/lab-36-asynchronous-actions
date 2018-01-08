import React from 'react';

class BookItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {title, author} = this.props.book;
    console.log(title, author);

    return(
      <h3> sup </h3>
    )
  }
}

export default BookItem;




// get this to console log the right data)