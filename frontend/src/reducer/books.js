const emptyState = {};

export default (state=emptyState, {type,payload}) => {
  switch(type){
    case 'BOOK_CREATE':
      return {...state, payload}
    default:
      return state;
  }
}