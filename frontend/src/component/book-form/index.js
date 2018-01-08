import React from 'react';

const emptyState = {
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
  
  componentDidMount(){
    this.props.bookActions.addBook({
      title: 'The Name of the Wind',
      author: 'Rothfuss',
    });
    
      this.props.bookActions.addBook({
      title: 'Harry Pooter',
      author: 'Rowling',
    });
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.bookActions.addBook(this.state);
    this.setState(emptyState)
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