import React from 'react';

let emptyState = {
  title: '',
  author: '',
}

class BookForm extends React.Component{
  constructor(props){
    super(props);
    this.state = emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit(e){
    e.preventDefault();
    console.log('submitted', this.state);
    this.setState(emptyState);
  };

  render(){
    return(
      <form 
        className='book-form' 
        onSubmit={this.handleSubmit} >

        <input
          name='title'
          placeholder='Book Title'
          type='text'
          onChange={this.handleChange}
          value={this.props.title}
        />

        <input
          name='author'
          placeholder='Author'
          type='text'
          onChange={this.handleChange}
          value={this.props.author}
        />

        <button type='submit'> add book </button>

      </form>
    )
  }
}

export default BookForm;