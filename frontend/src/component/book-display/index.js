import React from 'react';

class BookDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.state);
  }
};

export default BookDisplay;